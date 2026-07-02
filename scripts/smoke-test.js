const baseUrl = process.env.BASE_URL || "http://localhost:8080";
const invoiceNumber = `INV-${Date.now().toString(36).toUpperCase()}`;

const invoicePayload = {
  invoiceNumber,
  invoiceDate: "2026-07-02",
  vendorName: "Smoke Test Vendor",
  gstin: "29ABCDE1234F1Z5",
  baseAmount: 10000,
  dueDate: "2026-07-15",
  expenseType: "Software",
  vendorType: "Registered",
  discount: 500,
  subTotal: 9500,
  accountNumber: "12345678901",
  gst: 18,
  ifsc: "HDFC0001234",
  invoiceAmount: 11210,
  paymentFrequency: "Immediate",
  tds: 10,
  scheduledDate: "2026-07-10",
  paymentAmount: 10210,
  paidAmount: 0,
  dueAmount: 10210,
  description: "Smoke test invoice",
  paymentTerms: "Net 15",
  amountToVendor: 9210,
};

const request = async (label, path, options = {}, expectedStatuses = [200]) => {
  const response = await fetch(`${baseUrl}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const text = await response.text();
  const body = text ? JSON.parse(text) : null;
  const ok = expectedStatuses.includes(response.status);

  console.log(`${ok ? "PASS" : "FAIL"} ${label}: ${response.status}`);

  if (!ok) {
    console.log(JSON.stringify(body, null, 2));
    process.exitCode = 1;
  }

  return { response, body };
};

const run = async () => {
  console.log(`Testing ${baseUrl}`);
  console.log(`Invoice number: ${invoiceNumber}`);

  await request("Health check", "/health");

  await request("Create invoice", "/v1/vendor-payable/invoice/create", {
    method: "POST",
    body: JSON.stringify(invoicePayload),
  }, [201]);

  await request("Get all invoices", "/v1/vendor-payable/invoice/getAllInvoice");

  await request("Get invoice by number", `/v1/vendor-payable/invoice/${invoiceNumber}`);

  await request("Update invoice", `/v1/vendor-payable/invoice/${invoiceNumber}`, {
    method: "PUT",
    body: JSON.stringify({
      vendorName: "Updated Smoke Test Vendor",
      paidAmount: 2500,
      dueAmount: 7710,
      description: "Updated by smoke test",
    }),
  });

  await request("Duplicate invoice returns conflict", "/v1/vendor-payable/invoice/create", {
    method: "POST",
    body: JSON.stringify(invoicePayload),
  }, [409]);

  await request("Get all settlements", "/v1/vendor-payable/settlement");

  await request(
    "Get filtered settlements",
    `/v1/vendor-payable/settlement?invoiceId=${invoiceNumber}&paymentStatus=SUCCESS&payment_gateway=razorpay`,
  );

  await request(
    "Get settlement by invoice id",
    `/v1/vendor-payable/settlement/${invoiceNumber}`,
    {},
    [200, 404],
  );

  if (process.exitCode) {
    throw new Error("One or more API smoke tests failed.");
  }

  console.log("All API smoke tests completed.");
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

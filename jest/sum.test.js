const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

const checkIsSuppiler = (systemUserType) =>
  (systemUserType & 2) === 2 ||
  (systemUserType & 4) === 4 ||
  (systemUserType & 128) === 128;

// test("test checkIsSuppiler", () => {
//   console.log(checkIsSuppiler(3));

//   expect(checkIsSuppiler(2)).toBe(true);
//   expect(checkIsSuppiler(4)).toBe(true);
//   expect(checkIsSuppiler(128)).toBe(true);
//   expect(checkIsSuppiler(3)).toBe(false);
//   expect(checkIsSuppiler(5)).toBe(false);
//   expect(checkIsSuppiler(129)).toBe(false);
// });

function tenantid(headers) {
  console.log("header before", headers);
  const hasTenantId = headers?.hasOwnProperty("tenantId");
  if (hasTenantId && headers) {
    const tenantId = headers.tenantId;
    headers["tenant-id"] = tenantId;
    delete headers.tenantId;
  }

  console.log("header after", headers);
}

test("test tenantid", () => {
  tenantid(null);
  tenantid({
    tenantId: "xxx",
  });
  tenantid({
    tenantId: "aaa",
    "tenant-id": "bbb",
  });
  tenantid({
    aaa: 'abc'
  });
});

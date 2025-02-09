const Afriid = artifacts.require("Afriid");

contract("MetaCoin", (accounts) => {
  it("should display zero immediately after deployment", async () => {
    const afriIdInstance = await Afriid.deployed();
    const digitalDataCount = await afriIdInstance.digitalInformationCount();
    assert.equal(digitalDataCount, 0, "expected 0 found " + digitalDataCount);
  });
});

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// These files are dynamically created at test time
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MetaCoin.sol";
import "../contracts/Afriid.sol";

contract TestMetaCoin {

  function testInitialBalanceUsingDeployedContract() public {
    MetaCoin meta = MetaCoin(DeployedAddresses.MetaCoin());

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
  }

  function testInitialBalanceWithNewMetaCoin() public {
    MetaCoin meta = new MetaCoin();

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
  }

  function testDigitalCount() public {
    Afriid afri = new Afriid();
    uint expected = 0;
    Assert.equal(afri.digitalInformationCount(), expected, "digital count should be 0");
  }

  function testDataEntry() public {
    Afriid afri = new Afriid();

    string memory _fullName = "john doe";
    uint _dateOfBirth = 4729834798347;
    string memory _email = "johndoe@gmail.com";
    string memory _phoneNumber = "+343 83479238";
    string memory _photoDirectory = "dir_to_photo";
    string memory _fingerprintHash = "sdkfKmdjf";
    string memory _documentDirectory = "dir_to_doc";

    uint expected = 1;

    afri.registerIdentity(_fullName, _dateOfBirth, _email, _phoneNumber, _photoDirectory, _fingerprintHash, _documentDirectory);
    Assert.equal(afri.digitalInformationCount(), expected, "digital count should be one after registration... failed");

  }


}

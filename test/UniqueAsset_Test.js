const UniqueAsset = artifacts.require("../contracts/UniqueAsset.sol");

contract("UniqueAsset", function(accounts){

  it("Contract should be deployed", async () => {
    assert(UniqueAsset.deployed());
    });
    
    it("Should award address", async () => {
      const ipfsHash = "ipfs://QmYisyBDw6gU4tvNPsviXPoDbSPWTtk24F3dHqrfBSojF9";
      const metadata =
          "{'name': 'Razor Sword','hash': 'QmYisyBDw6gU4tvNPsviXPoDbSPWTtk24F3dHqrfBSojF9','author': 'zerbinidamata'}";
      const recipient =
      "0xD5A9f18B81E5844777eB73f205e6cb723a930732";
      let instance = await UniqueAsset.deployed();
      let result = await instance.awardItem(recipient, ipfsHash, metadata)
      assert(result);
    })

  });


 
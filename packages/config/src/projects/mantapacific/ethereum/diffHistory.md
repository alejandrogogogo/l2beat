Generated with discovered.json: 0x82b434e1ad23141f6cf0543946efac1092b0929a

# Diff at Mon, 14 Jul 2025 12:45:22 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@9f4300dad2f3d080cd56fa311d4a848556c74e72 block: 20927642
- current block number: 20927642

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    EOA  (0x000000000000000000000000000000000000dEaD) {
    +++ description: None
      address:
-        "0x000000000000000000000000000000000000dEaD"
+        "eth:0x000000000000000000000000000000000000dEaD"
    }
```

```diff
    EOA  (0x12ee26aD74d50a1f6BDD90811387d1e0f3e7C76A) {
    +++ description: None
      address:
-        "0x12ee26aD74d50a1f6BDD90811387d1e0f3e7C76A"
+        "eth:0x12ee26aD74d50a1f6BDD90811387d1e0f3e7C76A"
    }
```

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      address:
-        "0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
+        "eth:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
      values.$admin:
-        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
      values.$implementation:
-        "0x1E5e634981564fc645dcbC6546aE618d7870B30a"
+        "eth:0x1E5e634981564fc645dcbC6546aE618d7870B30a"
      values.$pastUpgrades.0.2.0:
-        "0x1E5e634981564fc645dcbC6546aE618d7870B30a"
+        "eth:0x1E5e634981564fc645dcbC6546aE618d7870B30a"
      values.CHALLENGER:
-        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
+        "eth:0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
      values.PROPOSER:
-        "0x853bDfF715eFeDc280C16241dD30A6d651f90aCa"
+        "eth:0x853bDfF715eFeDc280C16241dD30A6d651f90aCa"
      implementationNames.0x30c789674ad3B458886BBC9abf42EEe19EA05C1D:
-        "Proxy"
      implementationNames.0x1E5e634981564fc645dcbC6546aE618d7870B30a:
-        "L2OutputOracle"
      implementationNames.eth:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D:
+        "Proxy"
      implementationNames.eth:0x1E5e634981564fc645dcbC6546aE618d7870B30a:
+        "L2OutputOracle"
    }
```

```diff
    EOA Caldera (0x356000Cec4fC967f8FC372381D983426760A0391) {
    +++ description: None
      address:
-        "0x356000Cec4fC967f8FC372381D983426760A0391"
+        "eth:0x356000Cec4fC967f8FC372381D983426760A0391"
    }
```

```diff
    EOA  (0x35Aee2b2aa6ACB13C3a38a58AEb069C163734FaD) {
    +++ description: None
      address:
-        "0x35Aee2b2aa6ACB13C3a38a58AEb069C163734FaD"
+        "eth:0x35Aee2b2aa6ACB13C3a38a58AEb069C163734FaD"
    }
```

```diff
    contract AddressManager (0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      address:
-        "0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
+        "eth:0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
      values.owner:
-        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
      implementationNames.0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05:
-        "AddressManager"
      implementationNames.eth:0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05:
+        "AddressManager"
    }
```

```diff
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      address:
-        "0x3B95bC951EE0f553ba487327278cAc44f29715E5"
+        "eth:0x3B95bC951EE0f553ba487327278cAc44f29715E5"
      values.$admin:
-        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
      values.$implementation:
-        "0x62b257A1b1fC81c4e6E5Dc5b47F1E6184341Cd58"
+        "eth:0x62b257A1b1fC81c4e6E5Dc5b47F1E6184341Cd58"
      values.l2TokenBridge:
-        "0x4200000000000000000000000000000000000010"
+        "eth:0x4200000000000000000000000000000000000010"
      values.messenger:
-        "0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"
+        "eth:0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"
      values.MESSENGER:
-        "0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"
+        "eth:0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"
      values.OTHER_BRIDGE:
-        "0x4200000000000000000000000000000000000010"
+        "eth:0x4200000000000000000000000000000000000010"
      implementationNames.0x3B95bC951EE0f553ba487327278cAc44f29715E5:
-        "L1ChugSplashProxy"
      implementationNames.0x62b257A1b1fC81c4e6E5Dc5b47F1E6184341Cd58:
-        "L1StandardBridge"
      implementationNames.eth:0x3B95bC951EE0f553ba487327278cAc44f29715E5:
+        "L1ChugSplashProxy"
      implementationNames.eth:0x62b257A1b1fC81c4e6E5Dc5b47F1E6184341Cd58:
+        "L1StandardBridge"
    }
```

```diff
    contract MantaMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: None
      address:
-        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
+        "eth:0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x12ee26aD74d50a1f6BDD90811387d1e0f3e7C76A"
+        "eth:0x12ee26aD74d50a1f6BDD90811387d1e0f3e7C76A"
      values.$members.1:
-        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
+        "eth:0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
      values.$members.2:
-        "0x356000Cec4fC967f8FC372381D983426760A0391"
+        "eth:0x356000Cec4fC967f8FC372381D983426760A0391"
      values.$members.3:
-        "0xB44948Ff3E8a4d3Ac32A376B4b3209AdC7620770"
+        "eth:0xB44948Ff3E8a4d3Ac32A376B4b3209AdC7620770"
      values.$members.4:
-        "0xDC80503b718Ff3B2e43db42460A718c119e75cdd"
+        "eth:0xDC80503b718Ff3B2e43db42460A718c119e75cdd"
      values.$members.5:
-        "0x92124ee0e7238992E5E7F34f9FBBCD71931ABC6D"
+        "eth:0x92124ee0e7238992E5E7F34f9FBBCD71931ABC6D"
      values.$members.6:
-        "0x35Aee2b2aa6ACB13C3a38a58AEb069C163734FaD"
+        "eth:0x35Aee2b2aa6ACB13C3a38a58AEb069C163734FaD"
      implementationNames.0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    EOA  (0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5) {
    +++ description: None
      address:
-        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
+        "eth:0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
    }
```

```diff
    contract L1CrossDomainMessenger (0x635ba609680c55C3bDd0B3627b4c5dB21b13c310) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      address:
-        "0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"
+        "eth:0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"
      values.$admin:
-        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
      values.$implementation:
-        "0x9cDDc6F65eD67Ef19743fFDFD53501457ce8B51f"
+        "eth:0x9cDDc6F65eD67Ef19743fFDFD53501457ce8B51f"
      values.$pastUpgrades.0.2.0:
-        "0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"
+        "eth:0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"
      values.$pastUpgrades.1.2.0:
-        "0x9cDDc6F65eD67Ef19743fFDFD53501457ce8B51f"
+        "eth:0x9cDDc6F65eD67Ef19743fFDFD53501457ce8B51f"
      values.OTHER_MESSENGER:
-        "0x4200000000000000000000000000000000000007"
+        "eth:0x4200000000000000000000000000000000000007"
      values.PORTAL:
-        "0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
+        "eth:0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
      values.ResolvedDelegateProxy_addressManager:
-        "0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
+        "eth:0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
      implementationNames.0x635ba609680c55C3bDd0B3627b4c5dB21b13c310:
-        "ResolvedDelegateProxy"
      implementationNames.0x9cDDc6F65eD67Ef19743fFDFD53501457ce8B51f:
-        "L1CrossDomainMessenger"
      implementationNames.eth:0x635ba609680c55C3bDd0B3627b4c5dB21b13c310:
+        "ResolvedDelegateProxy"
      implementationNames.eth:0x9cDDc6F65eD67Ef19743fFDFD53501457ce8B51f:
+        "L1CrossDomainMessenger"
    }
```

```diff
    EOA  (0x853bDfF715eFeDc280C16241dD30A6d651f90aCa) {
    +++ description: None
      address:
-        "0x853bDfF715eFeDc280C16241dD30A6d651f90aCa"
+        "eth:0x853bDfF715eFeDc280C16241dD30A6d651f90aCa"
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      address:
-        "0x895E00269A05848F3c9889EfA677D02fF7351a5D"
+        "eth:0x895E00269A05848F3c9889EfA677D02fF7351a5D"
      values.$admin:
-        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
      values.$implementation:
-        "0xeF01a6aE995791FfFcA3d70bDA7B91E5Fa1aD0aE"
+        "eth:0xeF01a6aE995791FfFcA3d70bDA7B91E5Fa1aD0aE"
      values.$pastUpgrades.0.2.0:
-        "0xeF01a6aE995791FfFcA3d70bDA7B91E5Fa1aD0aE"
+        "eth:0xeF01a6aE995791FfFcA3d70bDA7B91E5Fa1aD0aE"
      values.batcherHash:
-        "0xA76E31D8471D569EfDd3D95d1b11Ce6710f4533F"
+        "eth:0xA76E31D8471D569EfDd3D95d1b11Ce6710f4533F"
      values.owner:
-        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
+        "eth:0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
      values.sequencerInbox:
-        "0xAEbA8e2307A22B6824a9a7a39f8b016C357Cd1Fe"
+        "eth:0xAEbA8e2307A22B6824a9a7a39f8b016C357Cd1Fe"
      values.unsafeBlockSigner:
-        "0xfeC5478feD709F728566FA6bF4546C83106be95B"
+        "eth:0xfeC5478feD709F728566FA6bF4546C83106be95B"
      implementationNames.0x895E00269A05848F3c9889EfA677D02fF7351a5D:
-        "Proxy"
      implementationNames.0xeF01a6aE995791FfFcA3d70bDA7B91E5Fa1aD0aE:
-        "SystemConfig"
      implementationNames.eth:0x895E00269A05848F3c9889EfA677D02fF7351a5D:
+        "Proxy"
      implementationNames.eth:0xeF01a6aE995791FfFcA3d70bDA7B91E5Fa1aD0aE:
+        "SystemConfig"
    }
```

```diff
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      address:
-        "0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
+        "eth:0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
      values.$admin:
-        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
      values.$implementation:
-        "0x445c62F4948f3B08a6bB1DbC51Ef985b3Eb199F1"
+        "eth:0x445c62F4948f3B08a6bB1DbC51Ef985b3Eb199F1"
      values.$pastUpgrades.0.2.0:
-        "0x445c62F4948f3B08a6bB1DbC51Ef985b3Eb199F1"
+        "eth:0x445c62F4948f3B08a6bB1DbC51Ef985b3Eb199F1"
      values.GUARDIAN:
-        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
+        "eth:0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
      values.L2_ORACLE:
-        "0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
+        "eth:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
      values.l2Sender:
-        "0x000000000000000000000000000000000000dEaD"
+        "eth:0x000000000000000000000000000000000000dEaD"
      values.SYSTEM_CONFIG:
-        "0x895E00269A05848F3c9889EfA677D02fF7351a5D"
+        "eth:0x895E00269A05848F3c9889EfA677D02fF7351a5D"
      implementationNames.0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622:
-        "Proxy"
      implementationNames.0x445c62F4948f3B08a6bB1DbC51Ef985b3Eb199F1:
-        "OptimismPortal"
      implementationNames.eth:0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622:
+        "Proxy"
      implementationNames.eth:0x445c62F4948f3B08a6bB1DbC51Ef985b3Eb199F1:
+        "OptimismPortal"
    }
```

```diff
    EOA  (0x92124ee0e7238992E5E7F34f9FBBCD71931ABC6D) {
    +++ description: None
      address:
-        "0x92124ee0e7238992E5E7F34f9FBBCD71931ABC6D"
+        "eth:0x92124ee0e7238992E5E7F34f9FBBCD71931ABC6D"
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      address:
-        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
      values.addressManager:
-        "0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
+        "eth:0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
      values.owner:
-        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
+        "eth:0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      implementationNames.0xa2DCa85BB892De55D8B262d1806114733106e8D1:
-        "ProxyAdmin"
      implementationNames.eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1:
+        "ProxyAdmin"
    }
```

```diff
    EOA  (0xA76E31D8471D569EfDd3D95d1b11Ce6710f4533F) {
    +++ description: None
      address:
-        "0xA76E31D8471D569EfDd3D95d1b11Ce6710f4533F"
+        "eth:0xA76E31D8471D569EfDd3D95d1b11Ce6710f4533F"
    }
```

```diff
    EOA  (0xAEbA8e2307A22B6824a9a7a39f8b016C357Cd1Fe) {
    +++ description: None
      address:
-        "0xAEbA8e2307A22B6824a9a7a39f8b016C357Cd1Fe"
+        "eth:0xAEbA8e2307A22B6824a9a7a39f8b016C357Cd1Fe"
    }
```

```diff
    EOA  (0xB44948Ff3E8a4d3Ac32A376B4b3209AdC7620770) {
    +++ description: None
      address:
-        "0xB44948Ff3E8a4d3Ac32A376B4b3209AdC7620770"
+        "eth:0xB44948Ff3E8a4d3Ac32A376B4b3209AdC7620770"
    }
```

```diff
    EOA  (0xDC80503b718Ff3B2e43db42460A718c119e75cdd) {
    +++ description: None
      address:
-        "0xDC80503b718Ff3B2e43db42460A718c119e75cdd"
+        "eth:0xDC80503b718Ff3B2e43db42460A718c119e75cdd"
    }
```

```diff
    EOA  (0xfeC5478feD709F728566FA6bF4546C83106be95B) {
    +++ description: None
      address:
-        "0xfeC5478feD709F728566FA6bF4546C83106be95B"
+        "eth:0xfeC5478feD709F728566FA6bF4546C83106be95B"
    }
```

```diff
+   Status: CREATED
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D)
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
```

```diff
+   Status: CREATED
    contract AddressManager (0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05)
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
```

```diff
+   Status: CREATED
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5)
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
```

```diff
+   Status: CREATED
    contract MantaMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0x635ba609680c55C3bDd0B3627b4c5dB21b13c310)
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
```

```diff
+   Status: CREATED
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D)
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
```

```diff
+   Status: CREATED
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622)
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1)
    +++ description: None
```

Generated with discovered.json: 0x2d25dc1e9d33b4bbbf667de2a435ac54b634b7ab

# Diff at Fri, 04 Jul 2025 12:19:08 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f56dc47fe915564d4555300304da4d3bcbc087f block: 20927642
- current block number: 20927642

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract MantaMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: None
      receivedPermissions.0.via.0.address:
-        "ethereum:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
      receivedPermissions.0.from:
-        "ethereum:0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
+        "eth:0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
      receivedPermissions.1.via.0.address:
-        "ethereum:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
      receivedPermissions.1.from:
-        "ethereum:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
+        "eth:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
      receivedPermissions.2.via.0.address:
-        "ethereum:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
      receivedPermissions.2.from:
-        "ethereum:0x3B95bC951EE0f553ba487327278cAc44f29715E5"
+        "eth:0x3B95bC951EE0f553ba487327278cAc44f29715E5"
      receivedPermissions.3.via.0.address:
-        "ethereum:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
      receivedPermissions.3.from:
-        "ethereum:0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"
+        "eth:0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"
      receivedPermissions.4.via.0.address:
-        "ethereum:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
      receivedPermissions.4.from:
-        "ethereum:0x895E00269A05848F3c9889EfA677D02fF7351a5D"
+        "eth:0x895E00269A05848F3c9889EfA677D02fF7351a5D"
      receivedPermissions.5.via.0.address:
-        "ethereum:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
      receivedPermissions.5.from:
-        "ethereum:0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
+        "eth:0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
      directlyReceivedPermissions.0.from:
-        "ethereum:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "eth:0xa2DCa85BB892De55D8B262d1806114733106e8D1"
    }
```

```diff
    EOA  (0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
+        "eth:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
      receivedPermissions.1.from:
-        "ethereum:0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
+        "eth:0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
      receivedPermissions.2.from:
-        "ethereum:0x895E00269A05848F3c9889EfA677D02fF7351a5D"
+        "eth:0x895E00269A05848F3c9889EfA677D02fF7351a5D"
    }
```

```diff
    EOA  (0x853bDfF715eFeDc280C16241dD30A6d651f90aCa) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
+        "eth:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      directlyReceivedPermissions.0.from:
-        "ethereum:0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
+        "eth:0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
      directlyReceivedPermissions.1.from:
-        "ethereum:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
+        "eth:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
      directlyReceivedPermissions.2.from:
-        "ethereum:0x3B95bC951EE0f553ba487327278cAc44f29715E5"
+        "eth:0x3B95bC951EE0f553ba487327278cAc44f29715E5"
      directlyReceivedPermissions.3.from:
-        "ethereum:0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"
+        "eth:0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"
      directlyReceivedPermissions.4.from:
-        "ethereum:0x895E00269A05848F3c9889EfA677D02fF7351a5D"
+        "eth:0x895E00269A05848F3c9889EfA677D02fF7351a5D"
      directlyReceivedPermissions.5.from:
-        "ethereum:0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
+        "eth:0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
    }
```

```diff
    EOA  (0xA76E31D8471D569EfDd3D95d1b11Ce6710f4533F) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x895E00269A05848F3c9889EfA677D02fF7351a5D"
+        "eth:0x895E00269A05848F3c9889EfA677D02fF7351a5D"
    }
```

Generated with discovered.json: 0x637fff01a29c4bcaa494eba3cf4419859afeffe8

# Diff at Mon, 16 Jun 2025 08:42:16 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e1208475abce20cea1768d2e4878c03350c1b7c9 block: 20927642
- current block number: 20927642

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract MantaMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: None
      receivedPermissions.5:
+        {"permission":"upgrade","from":"ethereum:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D","role":"admin","via":[{"address":"ethereum:0xa2DCa85BB892De55D8B262d1806114733106e8D1"}]}
      receivedPermissions.4.from:
-        "ethereum:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
+        "ethereum:0x895E00269A05848F3c9889EfA677D02fF7351a5D"
      receivedPermissions.3.from:
-        "ethereum:0x895E00269A05848F3c9889EfA677D02fF7351a5D"
+        "ethereum:0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
      receivedPermissions.2.from:
-        "ethereum:0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
+        "ethereum:0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"
    }
```

```diff
    contract L1CrossDomainMessenger (0x635ba609680c55C3bDd0B3627b4c5dB21b13c310) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$admin:
+        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      directlyReceivedPermissions.5:
+        {"permission":"upgrade","from":"ethereum:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D","role":"admin"}
      directlyReceivedPermissions.4.from:
-        "ethereum:0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
+        "ethereum:0x895E00269A05848F3c9889EfA677D02fF7351a5D"
      directlyReceivedPermissions.3.from:
-        "ethereum:0x895E00269A05848F3c9889EfA677D02fF7351a5D"
+        "ethereum:0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
      directlyReceivedPermissions.2.from:
-        "ethereum:0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
+        "ethereum:0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"
    }
```

Generated with discovered.json: 0x7cbced483af2ea473cdc11559c08067f415e8593

# Diff at Fri, 30 May 2025 07:08:32 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@a4d8c436027d17df0f9b76843cd6deb1888fa381 block: 20927642
- current block number: 20927642

## Description

config: change comment about eip1559 fee val

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      fieldMeta.eip1559Denominator:
+        {"description":"volatility param: lower denominator -> quicker fee changes on L2"}
    }
```

Generated with discovered.json: 0x98478171ad4792bece84d2cb925120cff049f443

# Diff at Fri, 23 May 2025 09:40:59 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 20927642
- current block number: 20927642

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract MantaMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: None
      receivedPermissions.4.from:
-        "0x3B95bC951EE0f553ba487327278cAc44f29715E5"
+        "0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
      receivedPermissions.4.description:
-        "upgrading the bridge implementation can give access to all funds escrowed therein."
      receivedPermissions.4.role:
+        "admin"
      receivedPermissions.3.from:
-        "0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
+        "0x895E00269A05848F3c9889EfA677D02fF7351a5D"
      receivedPermissions.3.role:
+        "admin"
      receivedPermissions.2.from:
-        "0x895E00269A05848F3c9889EfA677D02fF7351a5D"
+        "0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
      receivedPermissions.2.role:
+        "admin"
      receivedPermissions.1.from:
-        "0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
+        "0x3B95bC951EE0f553ba487327278cAc44f29715E5"
      receivedPermissions.1.description:
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
      receivedPermissions.1.role:
+        ".$admin"
      receivedPermissions.0.role:
+        ".owner"
      directlyReceivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    EOA  (0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5) {
    +++ description: None
      receivedPermissions.2.permission:
-        "challenge"
+        "guard"
      receivedPermissions.2.from:
-        "0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
+        "0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
      receivedPermissions.2.role:
+        ".GUARDIAN"
      receivedPermissions.1.permission:
-        "interact"
+        "challenge"
      receivedPermissions.1.from:
-        "0x895E00269A05848F3c9889EfA677D02fF7351a5D"
+        "0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
      receivedPermissions.1.description:
-        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
      receivedPermissions.1.role:
+        ".CHALLENGER"
      receivedPermissions.0.permission:
-        "guard"
+        "interact"
      receivedPermissions.0.from:
-        "0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
+        "0x895E00269A05848F3c9889EfA677D02fF7351a5D"
      receivedPermissions.0.description:
+        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
      receivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    EOA  (0x853bDfF715eFeDc280C16241dD30A6d651f90aCa) {
    +++ description: None
      receivedPermissions.0.role:
+        ".PROPOSER"
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      directlyReceivedPermissions.4.from:
-        "0x3B95bC951EE0f553ba487327278cAc44f29715E5"
+        "0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
      directlyReceivedPermissions.4.description:
-        "upgrading the bridge implementation can give access to all funds escrowed therein."
      directlyReceivedPermissions.4.role:
+        "admin"
      directlyReceivedPermissions.3.from:
-        "0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
+        "0x895E00269A05848F3c9889EfA677D02fF7351a5D"
      directlyReceivedPermissions.3.role:
+        "admin"
      directlyReceivedPermissions.2.from:
-        "0x895E00269A05848F3c9889EfA677D02fF7351a5D"
+        "0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
      directlyReceivedPermissions.2.role:
+        "admin"
      directlyReceivedPermissions.1.from:
-        "0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
+        "0x3B95bC951EE0f553ba487327278cAc44f29715E5"
      directlyReceivedPermissions.1.description:
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
      directlyReceivedPermissions.1.role:
+        ".$admin"
      directlyReceivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    EOA  (0xA76E31D8471D569EfDd3D95d1b11Ce6710f4533F) {
    +++ description: None
      receivedPermissions.0.role:
+        ".batcherHash"
    }
```

Generated with discovered.json: 0x97c95e5c62749a70ebc6704c9d462956630bbe26

# Diff at Tue, 29 Apr 2025 08:19:06 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 20927642
- current block number: 20927642

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions:
-        [{"permission":"challenge","to":"0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5","via":[]},{"permission":"propose","to":"0x853bDfF715eFeDc280C16241dD30A6d651f90aCa","via":[]},{"permission":"upgrade","to":"0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E","via":[{"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1"}]}]
    }
```

```diff
    contract AddressManager (0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions:
-        [{"permission":"interact","to":"0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E","description":"set and change address mappings.","via":[{"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1"}]}]
    }
```

```diff
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E","description":"upgrading the bridge implementation can give access to all funds escrowed therein.","via":[{"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1"}]}]
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions:
-        [{"permission":"interact","to":"0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5","description":"it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system.","via":[]},{"permission":"sequence","to":"0xA76E31D8471D569EfDd3D95d1b11Ce6710f4533F","via":[]},{"permission":"upgrade","to":"0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E","via":[{"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1"}]}]
    }
```

```diff
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions:
-        [{"permission":"guard","to":"0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5","via":[]},{"permission":"upgrade","to":"0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E","via":[{"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1"}]}]
    }
```

Generated with discovered.json: 0xba34a09a7e41fc6b7f94ec09b925b255fa667d86

# Diff at Thu, 27 Mar 2025 11:14:38 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@8cc2e36080df3a74dfd8475d41c64f46203f5218 block: 20927642
- current block number: 20927642

## Description

Config related: add guardian description details, hide some noisy values, hide AddressManager as spam cat, add proposer / challenger to permissioned opfp chains.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract AddressManager (0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      category:
+        {"name":"Spam","priority":-1}
    }
```

Generated with discovered.json: 0xbbbc531c2087cb1d9dd316d21de85730184e1fbe

# Diff at Tue, 04 Mar 2025 11:25:58 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@be38e12d3ff947ca8de40f3a23a9ba1875a54f5a block: 20927642
- current block number: 20927642

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.opStackDA.isSomeTxsLengthEqualToCelestiaDAExample:
-        true
      values.opStackDA.isUsingCelestia:
+        true
    }
```

Generated with discovered.json: 0x7453a700220526eb04832572edc71ce03894c2be

# Diff at Tue, 04 Mar 2025 10:39:25 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@98d260b45fe0d2195ce5e629bd7b200c8706e8ba block: 20927642
- current block number: 20927642

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      sinceBlock:
+        18095727
    }
```

```diff
    contract AddressManager (0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      sinceBlock:
+        18095723
    }
```

```diff
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      sinceBlock:
+        18095729
    }
```

```diff
    contract MantaMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: None
      sinceBlock:
+        18217879
    }
```

```diff
    contract L1CrossDomainMessenger (0x635ba609680c55C3bDd0B3627b4c5dB21b13c310) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      sinceBlock:
+        18095730
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      sinceBlock:
+        18095728
    }
```

```diff
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      sinceBlock:
+        18095726
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      sinceBlock:
+        18095724
    }
```

Generated with discovered.json: 0x14ba6ca9da728fdd270bfda64aa7c0d77d01de1a

# Diff at Wed, 26 Feb 2025 10:32:54 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@18513668f913fbe57a197f43655b19111df0e627 block: 20927642
- current block number: 20927642

## Description

config related: added categories for all opstack, op stack and polygoncdk stack templates.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract L1CrossDomainMessenger (0x635ba609680c55C3bDd0B3627b4c5dB21b13c310) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

Generated with discovered.json: 0xfecd8814a8276ab87841d69673d8583fc83e8e19

# Diff at Fri, 21 Feb 2025 14:08:46 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@d219f271711b2cf7a164e3443bead5e4957d13a8 block: 20927642
- current block number: 20927642

## Description

Config related: Change some severities and add templates.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      fieldMeta.proposer:
+        {"severity":"HIGH"}
      fieldMeta.challenger:
+        {"severity":"HIGH"}
      fieldMeta.deletedOutputs:
+        {"severity":"HIGH"}
    }
```

Generated with discovered.json: 0x3dd8e98d82ed07b372e4b11a3232cd57362442f0

# Diff at Fri, 21 Feb 2025 08:59:42 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1cf9ec35847912163c4b663a633e258a434c0bca block: 20927642
- current block number: 20927642

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract L1CrossDomainMessenger (0x635ba609680c55C3bDd0B3627b4c5dB21b13c310) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      categories:
-        ["Core"]
    }
```

Generated with discovered.json: 0xa55824a0dca8f95789eeaa3e90ee4099c58cdaa7

# Diff at Mon, 10 Feb 2025 19:04:14 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@3756adff7c1ac86d8af3374a90a75c1999aae2b3 block: 20927642
- current block number: 20927642

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.opStackDA.isUsingEigenDA:
+        false
    }
```

Generated with discovered.json: 0x91eab5ce884fcb860fc86936902eb12c55d53e8c

# Diff at Tue, 04 Feb 2025 12:31:41 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@145553eed7ba44636411ecb25e4099728acd02f9 block: 20927642
- current block number: 20927642

## Description

Rename 'configure' permission to 'interact'

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract AddressManager (0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract MantaMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: None
      receivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      directlyReceivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

Generated with discovered.json: 0xa0c0f842e16795da9e03d39b46f7e9bfb6a34d59

# Diff at Mon, 20 Jan 2025 11:09:43 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@2c8b4f3d9910bb6371be9b4df87b70856e7d8c64 block: 20927642
- current block number: 20927642

## Description

Rerun on the same block number. Applies fixes to permissions and via field. Renames permission's target to to/from.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions.2.target:
-        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.2.via.0.delay:
-        0
      issuedPermissions.2.to:
+        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.1.target:
-        "0x853bDfF715eFeDc280C16241dD30A6d651f90aCa"
      issuedPermissions.1.to:
+        "0x853bDfF715eFeDc280C16241dD30A6d651f90aCa"
      issuedPermissions.0.target:
-        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
      issuedPermissions.0.to:
+        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
    }
```

```diff
    contract AddressManager (0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.target:
-        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.via.0.description:
-        "set and change address mappings."
      issuedPermissions.0.to:
+        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.0.description:
+        "set and change address mappings."
    }
```

```diff
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      issuedPermissions.0.target:
-        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.via.0.description:
-        "upgrading the bridge implementation can give access to all funds escrowed therein."
      issuedPermissions.0.to:
+        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.0.description:
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract MantaMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: None
      receivedPermissions.4.target:
-        "0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
      receivedPermissions.4.from:
+        "0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
      receivedPermissions.3.target:
-        "0x895E00269A05848F3c9889EfA677D02fF7351a5D"
      receivedPermissions.3.from:
+        "0x895E00269A05848F3c9889EfA677D02fF7351a5D"
      receivedPermissions.2.target:
-        "0x3B95bC951EE0f553ba487327278cAc44f29715E5"
      receivedPermissions.2.from:
+        "0x3B95bC951EE0f553ba487327278cAc44f29715E5"
      receivedPermissions.1.target:
-        "0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
      receivedPermissions.1.from:
+        "0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
      receivedPermissions.0.target:
-        "0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
      receivedPermissions.0.from:
+        "0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
      directlyReceivedPermissions.0.target:
-        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
      directlyReceivedPermissions.0.from:
+        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.2.target:
-        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.2.via.0.delay:
-        0
      issuedPermissions.2.to:
+        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.1.target:
-        "0xA76E31D8471D569EfDd3D95d1b11Ce6710f4533F"
      issuedPermissions.1.to:
+        "0xA76E31D8471D569EfDd3D95d1b11Ce6710f4533F"
      issuedPermissions.0.target:
-        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
      issuedPermissions.0.to:
+        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
      issuedPermissions.0.description:
+        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
    }
```

```diff
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions.1.target:
-        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.0.target:
-        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
      issuedPermissions.0.to:
+        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      directlyReceivedPermissions.4.target:
-        "0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
      directlyReceivedPermissions.4.from:
+        "0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
      directlyReceivedPermissions.3.target:
-        "0x895E00269A05848F3c9889EfA677D02fF7351a5D"
      directlyReceivedPermissions.3.from:
+        "0x895E00269A05848F3c9889EfA677D02fF7351a5D"
      directlyReceivedPermissions.2.target:
-        "0x3B95bC951EE0f553ba487327278cAc44f29715E5"
      directlyReceivedPermissions.2.from:
+        "0x3B95bC951EE0f553ba487327278cAc44f29715E5"
      directlyReceivedPermissions.1.target:
-        "0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
      directlyReceivedPermissions.1.from:
+        "0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
      directlyReceivedPermissions.0.target:
-        "0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
      directlyReceivedPermissions.0.from:
+        "0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
    }
```

Generated with discovered.json: 0xc553cfb6b69de38328544f1b9f237513601db4f6

# Diff at Wed, 08 Jan 2025 09:03:03 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@deefa974378c2cd6b74f061e1f5a494bbbe1d63a block: 20927642
- current block number: 20927642

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      description:
-        "The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."
+        "The main entry point to deposit ERC20 tokens from host chain to this chain."
    }
```

Generated with discovered.json: 0x7710b28591b42dab49f86c35f3c6622267e0f8d3

# Diff at Fri, 01 Nov 2024 12:09:50 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@cd1f0e71bb08ce16b2084a11b768538e8aa6ba8c block: 20927642
- current block number: 20927642

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      issuedPermissions.0.via.0.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract MantaMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: None
      receivedPermissions.2.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      directlyReceivedPermissions.2.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

Generated with discovered.json: 0x8bcb62074816d1f9bc74071fa23644518f14deaf

# Diff at Tue, 29 Oct 2024 13:11:10 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@7b3fc9dc9074e1d423b48522c3f0273c86aab54a block: 20927642
- current block number: 20927642

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      fieldMeta:
+        {"FINALIZATION_PERIOD_SECONDS":{"description":"Challenge period (Number of seconds until a state root is finalized)."}}
    }
```

Generated with discovered.json: 0x3d2eb00846cbdf675ac00e789a2678a69c1ad20f

# Diff at Mon, 21 Oct 2024 12:45:49 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e660599f23a07618fe949a07be1f516ce44f1914 block: 20927642
- current block number: 20927642

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      descriptions:
-        ["Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots."]
      description:
+        "Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots."
    }
```

```diff
    contract AddressManager (0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      descriptions:
-        ["Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."]
      description:
+        "Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."
    }
```

```diff
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      descriptions:
-        ["The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."]
      description:
+        "The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."
    }
```

```diff
    contract L1CrossDomainMessenger (0x635ba609680c55C3bDd0B3627b4c5dB21b13c310) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      descriptions:
-        ["Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function."]
      description:
+        "Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function."
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      descriptions:
-        ["Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."]
      description:
+        "Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."
    }
```

```diff
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      descriptions:
-        ["The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."]
      description:
+        "The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."
    }
```

Generated with discovered.json: 0x9414ee402b7d721e01628754b404ca182a371bee

# Diff at Mon, 21 Oct 2024 11:07:33 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@8895d33866f5665c4c710f4ddaa32bfa63cc3c78 block: 20927642
- current block number: 20927642

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      values.$pastUpgrades.0.2:
+        ["0x1E5e634981564fc645dcbC6546aE618d7870B30a"]
      values.$pastUpgrades.0.1:
-        ["0x1E5e634981564fc645dcbC6546aE618d7870B30a"]
+        "0x1a87e499b70152ea3a2a6efdd564f52ca0feafea4b5ebf3bec1dea1744ce26bd"
    }
```

```diff
    contract L1CrossDomainMessenger (0x635ba609680c55C3bDd0B3627b4c5dB21b13c310) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$pastUpgrades.1.2:
+        ["0x9cDDc6F65eD67Ef19743fFDFD53501457ce8B51f"]
      values.$pastUpgrades.1.1:
-        ["0x9cDDc6F65eD67Ef19743fFDFD53501457ce8B51f"]
+        "0xc778764049cb9f0cd852c1361f73a39b1e6aeb4b368a4456f2f77c34369eb6df"
      values.$pastUpgrades.0.2:
+        ["0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"]
      values.$pastUpgrades.0.1:
-        ["0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"]
+        "0xa9f1d5a75b77547488322b8de82f0c63c27cdab4e58ffb59ac181c606cfbf460"
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.$pastUpgrades.0.2:
+        ["0xeF01a6aE995791FfFcA3d70bDA7B91E5Fa1aD0aE"]
      values.$pastUpgrades.0.1:
-        ["0xeF01a6aE995791FfFcA3d70bDA7B91E5Fa1aD0aE"]
+        "0x3fc415e1bb3f7da0c3242d8f9e94155fa39724cbbac34b0846b9a2249eaae22f"
    }
```

```diff
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      values.$pastUpgrades.0.2:
+        ["0x445c62F4948f3B08a6bB1DbC51Ef985b3Eb199F1"]
      values.$pastUpgrades.0.1:
-        ["0x445c62F4948f3B08a6bB1DbC51Ef985b3Eb199F1"]
+        "0x3ba5fd8ebd0374b77f27332c31ddfdac6e67d7317ab4668043a2e26cb0bb5996"
    }
```

Generated with discovered.json: 0xb56ac8f459504f2a56aadc0eea9dd8549ce35921

# Diff at Wed, 16 Oct 2024 11:37:44 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@a3d139b799cc0b28e5e912febb17464d4e5aef5d block: 20927642
- current block number: 20927642

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions.2:
+        {"permission":"upgrade","target":"0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E","via":[{"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","delay":0}]}
      issuedPermissions.1:
+        {"permission":"propose","target":"0x853bDfF715eFeDc280C16241dD30A6d651f90aCa","via":[]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "challenge"
      issuedPermissions.0.target:
-        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
+        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
      issuedPermissions.0.via.0:
-        {"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","delay":0}
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.2:
+        {"permission":"upgrade","target":"0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E","via":[{"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","delay":0}]}
      issuedPermissions.1.permission:
-        "upgrade"
+        "sequence"
      issuedPermissions.1.target:
-        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
+        "0xA76E31D8471D569EfDd3D95d1b11Ce6710f4533F"
      issuedPermissions.1.via.0:
-        {"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","delay":0}
    }
```

```diff
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions.1:
+        {"permission":"upgrade","target":"0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E","via":[{"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","delay":0}]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "guard"
      issuedPermissions.0.target:
-        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
+        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
      issuedPermissions.0.via.0:
-        {"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","delay":0}
    }
```

Generated with discovered.json: 0x48d5551e8bec815178675d7237986121dcdc44bc

# Diff at Mon, 14 Oct 2024 10:52:49 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1afc77ff111ceb0970e7d09efcc7b2f376b0c281 block: 20927642
- current block number: 20927642

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20927642 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      sourceHashes:
+        ["0x2cdcfef705094aaac53d507bad64d27b48ea5a9c11a7fadffacc192aab7a823f","0xcca8986d0789aa489ba57cd234e886bd92cb5a0d477e1f5ae5e6e030e15fb183"]
    }
```

```diff
    contract AddressManager (0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      sourceHashes:
+        ["0xdc86a850f11dc2b5c0472a05d0e3c14f239baf2c3b1ab19631591b0827985380"]
    }
```

```diff
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      sourceHashes:
+        ["0xbfb58685ff2f2f07eaa01a3c4e3c33c97686bfd3ae7c50c49f9da6ef5098cb31","0x79abdbd90460fe2ac0535b5cb7b4c45284322b49a0a090d1c509cdaf35dbc87e"]
    }
```

```diff
    contract MantaMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: None
      sourceHashes:
+        ["0x81a7349eebb98ac33b0bc6842e3cb258034a8f2a4ba004570bb8e2e25947f9ff","0xd42bbf9f7dcd3720a7fc6bdc6edfdfae8800a37d6dd4decfa0ef6ca4a2e88940"]
    }
```

```diff
    contract L1CrossDomainMessenger (0x635ba609680c55C3bDd0B3627b4c5dB21b13c310) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      sourceHashes:
+        ["0x20a2eb4d3677fc8a15e944f7b1843acd01b2e92acdc4c7a7f7a35b07b891149b","0xebfb36a18bcaa176678925149b43fdc5f9f943d98a6405ae1cbc26f4c168ff88"]
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      sourceHashes:
+        ["0x2cdcfef705094aaac53d507bad64d27b48ea5a9c11a7fadffacc192aab7a823f","0x29908eb7685943ff431cd384af851ce36a30997bbad880f9b4385bfc3abb86a2"]
    }
```

```diff
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      sourceHashes:
+        ["0x2cdcfef705094aaac53d507bad64d27b48ea5a9c11a7fadffacc192aab7a823f","0xd7fe53899c31d6d8e73b6724694736dc3c3c4ebc8f4ddbe989fe9d3dba26692d"]
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      template:
-        "opstack/ProxyAdmin"
+        "global/ProxyAdmin"
      sourceHashes:
+        ["0x96d2f0fa1bd83ebd61ba6a2351c64c7fda7aa580b11ea67bb6bf4338e5c28512"]
    }
```

Generated with discovered.json: 0x9a98a4a6f9552ab13242a94896fb5ffbd4a2e166

# Diff at Wed, 09 Oct 2024 13:09:48 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@37683e2b3d0587372f886eef49e921277810c8bf block: 20775915
- current block number: 20927642

## Description

Move to discovery driven data.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20775915 (main branch discovery), not current.

```diff
    contract AddressManager (0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.via.0.description:
+        "set and change address mappings."
      descriptions:
+        ["Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."]
    }
```

```diff
    contract MantaMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: None
      name:
-        "AdminMultisig"
+        "MantaMultisig"
      receivedPermissions.0.description:
+        "set and change address mappings."
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      fieldMeta.overhead:
-        {"severity":"LOW","description":"Fixed L2 gas overhead. Used as part of the L2 fee calculation."}
      fieldMeta.scalar:
-        {"severity":"LOW","description":"Dynamic L2 gas overhead. Used as part of the L2 fee calculation."}
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      directlyReceivedPermissions.0.description:
+        "set and change address mappings."
    }
```

Generated with discovered.json: 0x36a6f9af3ec14c253fd02d137d0e119b8c0e1c6b

# Diff at Tue, 01 Oct 2024 10:52:28 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bd754dc73c66120164006054f8d25c5fae9cd910 block: 20775915
- current block number: 20775915

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20775915 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      values.$pastUpgrades:
+        [["2023-09-09T02:06:47.000Z",["0x1E5e634981564fc645dcbC6546aE618d7870B30a"]]]
    }
```

```diff
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      values.$pastUpgrades:
+        []
    }
```

```diff
    contract L1CrossDomainMessenger (0x635ba609680c55C3bDd0B3627b4c5dB21b13c310) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$pastUpgrades:
+        [["2023-09-09T02:02:11.000Z",["0x635ba609680c55C3bDd0B3627b4c5dB21b13c310"]],["2023-09-09T02:06:23.000Z",["0x9cDDc6F65eD67Ef19743fFDFD53501457ce8B51f"]]]
      values.$upgradeCount:
+        2
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.$pastUpgrades:
+        [["2023-09-09T02:04:59.000Z",["0xeF01a6aE995791FfFcA3d70bDA7B91E5Fa1aD0aE"]]]
    }
```

```diff
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      values.$pastUpgrades:
+        [["2023-09-09T02:07:11.000Z",["0x445c62F4948f3B08a6bB1DbC51Ef985b3Eb199F1"]]]
    }
```

Generated with discovered.json: 0x9672942875aeb19a313414f997a17dddbe4717a3

# Diff at Wed, 18 Sep 2024 11:34:22 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@eb09774f0f9d9322f2117dfdfda7d4bb095f6c52 block: 19531966
- current block number: 20775915

## Description

Shape related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19531966 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      template:
+        "opstack/L2OutputOracle"
      descriptions:
+        ["Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots."]
    }
```

```diff
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      issuedPermissions.0.via.0.description:
+        "upgrading bridge implementation allows to access all funds and change every system component."
      template:
+        "opstack/L1StandardBridge"
      descriptions:
+        ["The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."]
    }
```

```diff
    contract AdminMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: None
      receivedPermissions.2.description:
+        "upgrading bridge implementation allows to access all funds and change every system component."
    }
```

```diff
    contract L1CrossDomainMessenger (0x635ba609680c55C3bDd0B3627b4c5dB21b13c310) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      template:
+        "opstack/L1CrossDomainMessenger"
      descriptions:
+        ["Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function."]
      categories:
+        ["Core"]
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.1:
+        {"permission":"upgrade","target":"0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E","via":[{"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","delay":0}]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "configure"
      issuedPermissions.0.target:
-        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
+        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
      issuedPermissions.0.via.0:
-        {"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","delay":0}
      fieldMeta.gasLimit:
+        {"severity":"LOW","description":"Gas limit for blocks on L2."}
      template:
+        "opstack/SystemConfig"
      descriptions:
+        ["Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."]
    }
```

```diff
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      template:
+        "opstack/OptimismPortal"
      descriptions:
+        ["The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."]
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      directlyReceivedPermissions.2.description:
+        "upgrading bridge implementation allows to access all funds and change every system component."
    }
```

Generated with discovered.json: 0xcfa19a8819d5e117936e5949d42a77b36a58123a

# Diff at Sun, 08 Sep 2024 17:18:26 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@fd881462cca0d7ef4519f907f3c6cfd5fe1cde8f block: 19531966
- current block number: 19531966

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19531966 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: None
      issuedPermissions.0.target:
-        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.0.via.0:
+        {"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","delay":0}
    }
```

```diff
    contract AddressManager (0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05) {
    +++ description: None
      issuedPermissions.0.target:
-        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.0.via.0:
+        {"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","delay":0}
    }
```

```diff
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5) {
    +++ description: None
      issuedPermissions.0.target:
-        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.0.via.0:
+        {"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","delay":0}
    }
```

```diff
    contract AdminMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: None
      descriptions:
-        ["It can act on behalf of 0xa2DCa85BB892De55D8B262d1806114733106e8D1, inheriting its permissions."]
      receivedPermissions.4:
+        {"permission":"upgrade","target":"0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622","via":[{"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1"}]}
      receivedPermissions.3:
+        {"permission":"upgrade","target":"0x895E00269A05848F3c9889EfA677D02fF7351a5D","via":[{"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1"}]}
      receivedPermissions.2:
+        {"permission":"upgrade","target":"0x3B95bC951EE0f553ba487327278cAc44f29715E5","via":[{"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1"}]}
      receivedPermissions.1:
+        {"permission":"upgrade","target":"0x30c789674ad3B458886BBC9abf42EEe19EA05C1D","via":[{"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1"}]}
      receivedPermissions.0.target:
-        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"
      receivedPermissions.0.via:
+        [{"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1"}]
      directlyReceivedPermissions:
+        [{"permission":"act","target":"0xa2DCa85BB892De55D8B262d1806114733106e8D1"}]
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: None
      issuedPermissions.0.target:
-        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.0.via.0:
+        {"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","delay":0}
    }
```

```diff
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622) {
    +++ description: None
      issuedPermissions.0.target:
-        "0xa2DCa85BB892De55D8B262d1806114733106e8D1"
+        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
      issuedPermissions.0.via.0:
+        {"address":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","delay":0}
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"configure","target":"0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E","via":[]}]
      receivedPermissions:
-        [{"permission":"configure","target":"0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"},{"permission":"upgrade","target":"0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"},{"permission":"upgrade","target":"0x3B95bC951EE0f553ba487327278cAc44f29715E5"},{"permission":"upgrade","target":"0x895E00269A05848F3c9889EfA677D02fF7351a5D"},{"permission":"upgrade","target":"0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"}]
      directlyReceivedPermissions:
+        [{"permission":"configure","target":"0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"},{"permission":"upgrade","target":"0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"},{"permission":"upgrade","target":"0x3B95bC951EE0f553ba487327278cAc44f29715E5"},{"permission":"upgrade","target":"0x895E00269A05848F3c9889EfA677D02fF7351a5D"},{"permission":"upgrade","target":"0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"}]
    }
```

Generated with discovered.json: 0xacdf11090a8cc066ca8f8061b6346a45b518d896

# Diff at Fri, 30 Aug 2024 07:53:37 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@6c1bd1f41fadf5f2cb1c1805b5a2c6138a3ed35a block: 19531966
- current block number: 19531966

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19531966 (main branch discovery), not current.

```diff
    contract AdminMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: It can act on behalf of 0xa2DCa85BB892De55D8B262d1806114733106e8D1, inheriting its permissions.
      receivedPermissions.0.via:
-        []
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      receivedPermissions.4.via:
-        []
      receivedPermissions.3.via:
-        []
      receivedPermissions.2.via:
-        []
      receivedPermissions.1.via:
-        []
      receivedPermissions.0.via:
-        []
    }
```

Generated with discovered.json: 0x48ef87623255f072257b763025ef193c8ab9a29c

# Diff at Fri, 23 Aug 2024 09:53:13 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@67597c7d6c810bc726594446890178150240711e block: 19531966
- current block number: 19531966

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19531966 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: None
      values.$upgradeCount:
+        1
    }
```

```diff
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5) {
    +++ description: None
      values.$upgradeCount:
+        0
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: None
      values.$upgradeCount:
+        1
    }
```

```diff
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622) {
    +++ description: None
      values.$upgradeCount:
+        1
    }
```

Generated with discovered.json: 0x97a1675162ec41cabf82b5f9462bdb065d32ce7c

# Diff at Wed, 21 Aug 2024 10:03:59 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@2f6dde3357bf5d79196b6e94f79d853a6c4ec72b block: 19531966
- current block number: 19531966

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19531966 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","via":[]}]
    }
```

```diff
    contract AddressManager (0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"configure","target":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","via":[]}]
    }
```

```diff
    contract L1StandardBridge (0x3B95bC951EE0f553ba487327278cAc44f29715E5) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","via":[]}]
    }
```

```diff
    contract AdminMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: It can act on behalf of 0xa2DCa85BB892De55D8B262d1806114733106e8D1, inheriting its permissions.
      assignedPermissions:
-        {"configure":["0xa2DCa85BB892De55D8B262d1806114733106e8D1"]}
      receivedPermissions:
+        [{"permission":"configure","target":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","via":[]}]
    }
```

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","via":[]}]
    }
```

```diff
    contract OptimismPortal (0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0xa2DCa85BB892De55D8B262d1806114733106e8D1","via":[]}]
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      assignedPermissions:
-        {"upgrade":["0x30c789674ad3B458886BBC9abf42EEe19EA05C1D","0x3B95bC951EE0f553ba487327278cAc44f29715E5","0x895E00269A05848F3c9889EfA677D02fF7351a5D","0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"],"configure":["0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"]}
      issuedPermissions:
+        [{"permission":"configure","target":"0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E","via":[]}]
      receivedPermissions:
+        [{"permission":"configure","target":"0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05","via":[]},{"permission":"upgrade","target":"0x30c789674ad3B458886BBC9abf42EEe19EA05C1D","via":[]},{"permission":"upgrade","target":"0x3B95bC951EE0f553ba487327278cAc44f29715E5","via":[]},{"permission":"upgrade","target":"0x895E00269A05848F3c9889EfA677D02fF7351a5D","via":[]},{"permission":"upgrade","target":"0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622","via":[]}]
    }
```

Generated with discovered.json: 0xeb52acb3dbf030c27907bcb03edebb606ca2bdee

# Diff at Fri, 09 Aug 2024 12:00:21 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bf40aa32f030fd312056ca0ef198c8550467d1d7 block: 19531966
- current block number: 19531966

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19531966 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      assignedPermissions.upgrade.3:
-        "0x895E00269A05848F3c9889EfA677D02fF7351a5D"
+        "0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
      assignedPermissions.upgrade.2:
-        "0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
+        "0x895E00269A05848F3c9889EfA677D02fF7351a5D"
      assignedPermissions.upgrade.1:
-        "0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"
+        "0x3B95bC951EE0f553ba487327278cAc44f29715E5"
      assignedPermissions.upgrade.0:
-        "0x3B95bC951EE0f553ba487327278cAc44f29715E5"
+        "0x30c789674ad3B458886BBC9abf42EEe19EA05C1D"
    }
```

Generated with discovered.json: 0x067a99a0bd128bff0d80dda275e0022660b6453e

# Diff at Fri, 09 Aug 2024 10:10:28 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f0da1d0aab7bc6b3b5e54e7e93480bd98e57035 block: 19531966
- current block number: 19531966

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19531966 (main branch discovery), not current.

```diff
    contract AdminMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: It can act on behalf of 0xa2DCa85BB892De55D8B262d1806114733106e8D1, inheriting its permissions.
      assignedPermissions.owner:
-        ["0xa2DCa85BB892De55D8B262d1806114733106e8D1"]
      assignedPermissions.configure:
+        ["0xa2DCa85BB892De55D8B262d1806114733106e8D1"]
      values.$multisigThreshold:
-        "5 of 7 (71%)"
      values.getOwners:
-        ["0x12ee26aD74d50a1f6BDD90811387d1e0f3e7C76A","0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5","0x356000Cec4fC967f8FC372381D983426760A0391","0xB44948Ff3E8a4d3Ac32A376B4b3209AdC7620770","0xDC80503b718Ff3B2e43db42460A718c119e75cdd","0x92124ee0e7238992E5E7F34f9FBBCD71931ABC6D","0x35Aee2b2aa6ACB13C3a38a58AEb069C163734FaD"]
      values.getThreshold:
-        5
      values.$members:
+        ["0x12ee26aD74d50a1f6BDD90811387d1e0f3e7C76A","0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5","0x356000Cec4fC967f8FC372381D983426760A0391","0xB44948Ff3E8a4d3Ac32A376B4b3209AdC7620770","0xDC80503b718Ff3B2e43db42460A718c119e75cdd","0x92124ee0e7238992E5E7F34f9FBBCD71931ABC6D","0x35Aee2b2aa6ACB13C3a38a58AEb069C163734FaD"]
      values.$threshold:
+        5
      values.multisigThreshold:
+        "5 of 7 (71%)"
    }
```

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
    +++ description: None
      assignedPermissions.admin:
-        ["0x30c789674ad3B458886BBC9abf42EEe19EA05C1D","0x3B95bC951EE0f553ba487327278cAc44f29715E5","0x895E00269A05848F3c9889EfA677D02fF7351a5D","0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622"]
      assignedPermissions.owner:
-        ["0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"]
      assignedPermissions.upgrade:
+        ["0x3B95bC951EE0f553ba487327278cAc44f29715E5","0x9168765EE952de7C6f8fC6FaD5Ec209B960b7622","0x30c789674ad3B458886BBC9abf42EEe19EA05C1D","0x895E00269A05848F3c9889EfA677D02fF7351a5D"]
      assignedPermissions.configure:
+        ["0x3Ad319BB4872F8cB75a26Ac30CC4bD2d56b67b05"]
    }
```

Generated with discovered.json: 0xbe289f502c3021829ee2cab7c512a572d7912d24

# Diff at Tue, 30 Jul 2024 11:12:40 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@b2b6471ff62871f4956541f42ec025c356c08f7e block: 19531966
- current block number: 19531966

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19531966 (main branch discovery), not current.

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: None
      fieldMeta:
+        {"overhead":{"severity":"LOW","description":"Fixed L2 gas overhead. Used as part of the L2 fee calculation."},"scalar":{"severity":"LOW","description":"Dynamic L2 gas overhead. Used as part of the L2 fee calculation."}}
    }
```

Generated with discovered.json: 0x0a45e5c92f859c0519f98dc3bc80e43aa365fa72

# Diff at Thu, 18 Jul 2024 10:31:49 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@d89fe52cb65d643cef712d1d7910564a7acf2dce block: 19531966
- current block number: 19531966

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19531966 (main branch discovery), not current.

```diff
    contract AdminMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: None
      descriptions:
+        ["It can act on behalf of 0xa2DCa85BB892De55D8B262d1806114733106e8D1, inheriting its permissions."]
    }
```

Generated with discovered.json: 0x258219b501d363843138ef55364ea46a8d2e8675

# Diff at Thu, 28 Mar 2024 10:18:22 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@dd32bb06b292cc8459fb09925454ee3a90f5c27e block: 19439793
- current block number: 19531966

## Description

Update discovery to include the multisig threshold.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19439793 (main branch discovery), not current.

```diff
    contract AdminMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    +++ description: None
      upgradeability.threshold:
+        "5 of 7 (71%)"
    }
```

Generated with discovered.json: 0x7453a7a9b4472a9d917f35faf1d6d48047385e55

# Diff at Thu, 14 Mar 2024 07:47:54 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@ad2a1d42c830fe0716608a8fb29e527b676ac443 block: 19425422
- current block number: 19431859

## Description

The scalar value has been decreased, which decreases the result of the L2 fee calculation.

## Watched changes

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: None
+++ description: Dynamic L2 gas overhead. Used as part of the L2 fee calculation.
+++ severity: LOW
      values.scalar:
-        66666
+        6666
    }
```

Generated with discovered.json: 0xc5df0df9a23f2a2bf491ad8e88b775ebdcfe35f5

# Diff at Wed, 13 Mar 2024 10:01:47 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@b09f0a6b1067bd3da915ef7afd86147789cc65d3 block: 19411962
- current block number: 19425422

## Description

The scalar value has been decreased, which reduces the result of the L2 fee calculation.

## Watched changes

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: None
+++ description: Dynamic L2 gas overhead. Used as part of the L2 fee calculation.
+++ severity: LOW
      values.scalar:
-        333333
+        66666
    }
```

Generated with discovered.json: 0x419752b52aa56fed69f8b88c8ca8cfa92d3010df

# Diff at Mon, 11 Mar 2024 12:51:29 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@64454506aee2b4b4e15b121f096369e92ec4cf20 block: 19176785
- current block number: 19411962

## Description

Update OP stack DA handler

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19176785 (main branch discovery), not current.

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
    +++ description: None
      values.opStackDA.isSequencerSendingBlobTx:
+        false
    }
```

Generated with discovered.json: 0x857965f6efe7d718d517b2d9c6a3a26eca86b044

# Diff at Wed, 07 Feb 2024 14:03:49 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@2e35800e01005d93332a552032058dcd67f3631d block: 19175192
- current block number: 19176785

## Description

Added opStackSequencerInbox handler

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19175192 (main branch discovery), not current.

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
      values.sequencerInbox:
+        "0xAEbA8e2307A22B6824a9a7a39f8b016C357Cd1Fe"
    }
```

Generated with discovered.json: 0xf41b9412e1ab67a48ee15d2c459e9b166a47846e

# Diff at Wed, 07 Feb 2024 08:42:00 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@64f1e0f27f831d3ef860a1c2faad8c77e04e6c29 block: 19090321
- current block number: 19175192

## Description

Updated with the new OpDAHandler to remove the field.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19090321 (main branch discovery), not current.

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
      values.opStackDA.isAllTxsLengthEqualToCelestiaDAExample:
-        true
    }
```

Generated with discovered.json: 0x3302e4ba6cac61c151ac35627e4c8bdfe701eebe

# Diff at Fri, 26 Jan 2024 10:56:26 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@bb037f7100968a00265a4787338e51ca81aafe9b block: 19061375
- current block number: 19090321

## Description

Added opStackDa handler

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19061375 (main branch discovery), not current.

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
      values.opStackDA:
+        {"isAllTxsLengthEqualToCelestiaDAExample":true,"isSomeTxsLengthEqualToCelestiaDAExample":true}
    }
```

Generated with discovered.json: 0x0d84b992f8771a97aab0e3b0217bb0556c350a83

# Diff at Mon, 22 Jan 2024 09:26:23 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@7755f153438c1f16773ba6733cfa3a8c8bc0a394 block: 19040782
- current block number: 19061375

## Description

L2 Block gas limit decreased, but still increased from the previous 30000000.

## Watched changes

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
      values.gasLimit:
-        100000000
+        50000000
    }
```

# Diff at Fri, 19 Jan 2024 12:03:31 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@a25b693cc3754074753705b502d4656fdd29ecbb block: 18927709
- current block number: 19040782

## Description

L2 Block gas limit increased.

## Watched changes

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
      values.gasLimit:
-        30000000
+        100000000
    }
```

# Diff at Wed, 03 Jan 2024 15:26:09 GMT:

- author: Radina Talanova (<nt.radina@gmail.com>)
- comparing to: main@e8eb03b39061a86a8ec01e26d970e40d080ad225

## Description

Scalar - a system configuration parameter used as dynamic L2 gas overhead in the L2 fee calculation, has been increased.

## Watched changes

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
      values.scalar:
-        166667
+        333333
    }
```

# Diff at Tue, 19 Dec 2023 14:23:07 GMT:

- author: Radina Talanova (<nt.radina@gmail.com>)
- comparing to: main@a5f45641c9d10d62e395e1cd088a79446ab63c09

## Description

Scalar - a system configuration parameter used as dynamic L2 gas overhead in the L2 fee calculation, has been decreased.

## Watched changes

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
      values.scalar:
-        700000
+        166667
    }
```

# Diff at Thu, 30 Nov 2023 10:07:56 GMT:

- author: Radina Talanova (<nt.radina@gmail.com>)
- comparing to: main@d4d01e687218065c65077f4e7616188f47938ed3

## Description

Scalar - a system configuration parameter used as dynamic L2 gas overhead in the L2 fee calculation, has been decreased.

## Watched changes

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
      values.scalar:
-        1000000
+        700000
    }
```

# Diff at Fri, 17 Nov 2023 12:11:23 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@8df7aef75226275b8e56ba8d4d76ce64057b0360

## Description

System configuration parameters used for L2 fee calculation have been decreased:

- overhead: 2100 -> 1000
- scalar: 1300000 -> 1000000

## Watched changes

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
      values.overhead:
-        2100
+        1000
      values.scalar:
-        1300000
+        1000000
    }
```

# Diff at Mon, 02 Oct 2023 13:46:59 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@10dbc30af490bd7af5cfca51b827ce3f10182f4d

## Watched changes

```diff
    contract ProxyAdmin (0xa2DCa85BB892De55D8B262d1806114733106e8D1) {
      values.owner:
-        "0x4b1A788B20bb85eb19f8e9B69B8a584e7fA29fe5"
+        "0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E"
    }
```

```diff
+   Status: CREATED
    contract AdminMultisig (0x3c46C05c2eba8eDd0B0f0C8B1D2fBf9fc53ea01E) {
    }
```

# Diff at Tue, 26 Sep 2023 10:12:59 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@cfd4e281f2af40c7c69302b16c1308c0c5651be0

## Watched changes

```diff
    contract L2OutputOracle (0x30c789674ad3B458886BBC9abf42EEe19EA05C1D) {
      values.deletedOutputs:
+        []
    }
```

# Diff at Wed, 20 Sep 2023 14:08:40 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@baff89f527efcf9b2e09db38bebde3bbd142837c

## Watched changes

```diff
    contract SystemConfig (0x895E00269A05848F3c9889EfA677D02fF7351a5D) {
      values.batcherHash:
-        "0x000000000000000000000000a76e31d8471d569efdd3d95d1b11ce6710f4533f"
+        "0xA76E31D8471D569EfDd3D95d1b11Ce6710f4533F"
      derivedName:
+        "SystemConfig"
    }
```

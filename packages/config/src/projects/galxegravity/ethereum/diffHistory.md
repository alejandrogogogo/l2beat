Generated with discovered.json: 0x9e2e3c19be2b64b49f66fb9930285f1d59e92909

# Diff at Mon, 14 Jul 2025 12:45:07 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@9f4300dad2f3d080cd56fa311d4a848556c74e72 block: 22895937
- current block number: 22895937

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22895937 (main branch discovery), not current.

```diff
    EOA  (0x006F5B7E2D58fb4E53DEdaB8802FCdf2a5441DC7) {
    +++ description: None
      address:
-        "0x006F5B7E2D58fb4E53DEdaB8802FCdf2a5441DC7"
+        "eth:0x006F5B7E2D58fb4E53DEdaB8802FCdf2a5441DC7"
    }
```

```diff
    contract OneStepProofEntry (0x0537c93dA3b1f8A525204165d1d93De0534c262f) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
      address:
-        "0x0537c93dA3b1f8A525204165d1d93De0534c262f"
+        "eth:0x0537c93dA3b1f8A525204165d1d93De0534c262f"
      values.prover0:
-        "0x6982e35C878cD2b5aF8Dcf06f33c4EfB01D6f482"
+        "eth:0x6982e35C878cD2b5aF8Dcf06f33c4EfB01D6f482"
      values.proverHostIo:
-        "0x856EA788977Bc771E8Ca87471baeC507A0f54771"
+        "eth:0x856EA788977Bc771E8Ca87471baeC507A0f54771"
      values.proverMath:
-        "0x9c40D14A2FC3f0A2f5fe804436f8e312224472C5"
+        "eth:0x9c40D14A2FC3f0A2f5fe804436f8e312224472C5"
      values.proverMem:
-        "0xcaBf38d8eADdE0BC6C91655242AFB4Da92a63FCe"
+        "eth:0xcaBf38d8eADdE0BC6C91655242AFB4Da92a63FCe"
      implementationNames.0x0537c93dA3b1f8A525204165d1d93De0534c262f:
-        "OneStepProofEntry"
      implementationNames.eth:0x0537c93dA3b1f8A525204165d1d93De0534c262f:
+        "OneStepProofEntry"
    }
```

```diff
    contract Outbox (0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF) {
    +++ description: Facilitates L2 to L1 contract calls: Messages initiated from L2 (for example withdrawal messages) eventually resolve in execution on L1.
      address:
-        "0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
+        "eth:0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
      values.$admin:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      values.$implementation:
-        "0x19431dc37098877486532250FB3158140717C00C"
+        "eth:0x19431dc37098877486532250FB3158140717C00C"
      values.$pastUpgrades.0.2.0:
-        "0x19431dc37098877486532250FB3158140717C00C"
+        "eth:0x19431dc37098877486532250FB3158140717C00C"
      values.bridge:
-        "0x7983403dDA368AA7d67145a9b81c5c517F364c42"
+        "eth:0x7983403dDA368AA7d67145a9b81c5c517F364c42"
      values.l2ToL1Sender:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.rollup:
-        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      implementationNames.0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF:
-        "TransparentUpgradeableProxy"
      implementationNames.0x19431dc37098877486532250FB3158140717C00C:
-        "ERC20Outbox"
      implementationNames.eth:0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0x19431dc37098877486532250FB3158140717C00C:
+        "ERC20Outbox"
    }
```

```diff
    EOA  (0x11f563dDbF266484Dd910A401A7e44299d80b1d5) {
    +++ description: None
      address:
-        "0x11f563dDbF266484Dd910A401A7e44299d80b1d5"
+        "eth:0x11f563dDbF266484Dd910A401A7e44299d80b1d5"
    }
```

```diff
    EOA  (0x16C1D3b4aDB6f0F468FCE7b802cE5AA0A2B06d03) {
    +++ description: None
      address:
-        "0x16C1D3b4aDB6f0F468FCE7b802cE5AA0A2B06d03"
+        "eth:0x16C1D3b4aDB6f0F468FCE7b802cE5AA0A2B06d03"
    }
```

```diff
    EOA  (0x17F187D978664C96ffD655996a45e085c403AD8b) {
    +++ description: None
      address:
-        "0x17F187D978664C96ffD655996a45e085c403AD8b"
+        "eth:0x17F187D978664C96ffD655996a45e085c403AD8b"
    }
```

```diff
    contract ValidatorUtils (0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF) {
    +++ description: This contract implements view only utilities for validators.
      address:
-        "0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF"
+        "eth:0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF"
      values.GRAVITY_STAKERS.0.0:
-        "0x16C1D3b4aDB6f0F468FCE7b802cE5AA0A2B06d03"
+        "eth:0x16C1D3b4aDB6f0F468FCE7b802cE5AA0A2B06d03"
      implementationNames.0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF:
-        "ValidatorUtils"
      implementationNames.eth:0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF:
+        "ValidatorUtils"
    }
```

```diff
    EOA  (0x2E8C0869C173cC07c58186E9DeEA74314635b1E2) {
    +++ description: None
      address:
-        "0x2E8C0869C173cC07c58186E9DeEA74314635b1E2"
+        "eth:0x2E8C0869C173cC07c58186E9DeEA74314635b1E2"
    }
```

```diff
    EOA  (0x33Bf8bF5aF3579D0E2305302409A5b6b4173c779) {
    +++ description: None
      address:
-        "0x33Bf8bF5aF3579D0E2305302409A5b6b4173c779"
+        "eth:0x33Bf8bF5aF3579D0E2305302409A5b6b4173c779"
    }
```

```diff
    EOA  (0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f) {
    +++ description: None
      address:
-        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
+        "eth:0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
    }
```

```diff
    EOA  (0x401Ba2e5037e3d8D1c32E77Dfd371501618604Bf) {
    +++ description: None
      address:
-        "0x401Ba2e5037e3d8D1c32E77Dfd371501618604Bf"
+        "eth:0x401Ba2e5037e3d8D1c32E77Dfd371501618604Bf"
    }
```

```diff
    contract Conduit Multisig 1 (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      address:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
+        "eth:0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x81175155D85377C337d92f1FA52Da166C3A4E7Ac"
+        "eth:0x81175155D85377C337d92f1FA52Da166C3A4E7Ac"
      values.$members.1:
-        "0x860e06Fe384D1A3340111e7D142E02642178c053"
+        "eth:0x860e06Fe384D1A3340111e7D142E02642178c053"
      values.$members.2:
-        "0x50930d652266EF4127FA3A1906B7Cb9951076628"
+        "eth:0x50930d652266EF4127FA3A1906B7Cb9951076628"
      values.$members.3:
-        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
+        "eth:0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
      values.$members.4:
-        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
+        "eth:0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
      values.$members.5:
-        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
+        "eth:0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
      values.$members.6:
-        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
+        "eth:0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
      values.$members.7:
-        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
+        "eth:0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
      values.$members.8:
-        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
+        "eth:0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
      values.$members.9:
-        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
+        "eth:0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
      values.$members.10:
-        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
+        "eth:0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
      implementationNames.0x4a4962275DF8C60a80d3a25faEc5AA7De116A746:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x4a4962275DF8C60a80d3a25faEc5AA7De116A746:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    EOA  (0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe) {
    +++ description: None
      address:
-        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
+        "eth:0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
    }
```

```diff
    EOA  (0x4ed0f98FB4c331e672653E832c55E0f9F402C228) {
    +++ description: None
      address:
-        "0x4ed0f98FB4c331e672653E832c55E0f9F402C228"
+        "eth:0x4ed0f98FB4c331e672653E832c55E0f9F402C228"
    }
```

```diff
    EOA  (0x50930d652266EF4127FA3A1906B7Cb9951076628) {
    +++ description: None
      address:
-        "0x50930d652266EF4127FA3A1906B7Cb9951076628"
+        "eth:0x50930d652266EF4127FA3A1906B7Cb9951076628"
    }
```

```diff
    contract ChallengeManager (0x68466622Aae5a9Ffd02530247d75Dd107f06B333) {
    +++ description: Contract that allows challenging state roots. Can be called through the RollupProxy by Validators or the UpgradeExecutor.
      address:
-        "0x68466622Aae5a9Ffd02530247d75Dd107f06B333"
+        "eth:0x68466622Aae5a9Ffd02530247d75Dd107f06B333"
      values.$admin:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      values.$implementation:
-        "0x531c78AA0e0126Cef52c2027AA026Aa6e2929194"
+        "eth:0x531c78AA0e0126Cef52c2027AA026Aa6e2929194"
      values.$pastUpgrades.0.2.0:
-        "0x1D901DD7A5eFE421C3C437B147040E5AF22E6A43"
+        "eth:0x1D901DD7A5eFE421C3C437B147040E5AF22E6A43"
      values.$pastUpgrades.1.2.0:
-        "0x02E05A9245C5853f895daDcc3A8216C953C8736B"
+        "eth:0x02E05A9245C5853f895daDcc3A8216C953C8736B"
      values.$pastUpgrades.2.2.0:
-        "0x531c78AA0e0126Cef52c2027AA026Aa6e2929194"
+        "eth:0x531c78AA0e0126Cef52c2027AA026Aa6e2929194"
      values.bridge:
-        "0x7983403dDA368AA7d67145a9b81c5c517F364c42"
+        "eth:0x7983403dDA368AA7d67145a9b81c5c517F364c42"
      values.osp:
-        "0x0537c93dA3b1f8A525204165d1d93De0534c262f"
+        "eth:0x0537c93dA3b1f8A525204165d1d93De0534c262f"
      values.resultReceiver:
-        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      values.sequencerInbox:
-        "0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
      implementationNames.0x68466622Aae5a9Ffd02530247d75Dd107f06B333:
-        "TransparentUpgradeableProxy"
      implementationNames.0x531c78AA0e0126Cef52c2027AA026Aa6e2929194:
-        "ChallengeManager"
      implementationNames.eth:0x68466622Aae5a9Ffd02530247d75Dd107f06B333:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0x531c78AA0e0126Cef52c2027AA026Aa6e2929194:
+        "ChallengeManager"
    }
```

```diff
    contract OneStepProver0 (0x6982e35C878cD2b5aF8Dcf06f33c4EfB01D6f482) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
      address:
-        "0x6982e35C878cD2b5aF8Dcf06f33c4EfB01D6f482"
+        "eth:0x6982e35C878cD2b5aF8Dcf06f33c4EfB01D6f482"
      implementationNames.0x6982e35C878cD2b5aF8Dcf06f33c4EfB01D6f482:
-        "OneStepProver0"
      implementationNames.eth:0x6982e35C878cD2b5aF8Dcf06f33c4EfB01D6f482:
+        "OneStepProver0"
    }
```

```diff
    EOA  (0x74a0d46BA4F69cAB77A459f8B12dc531c7DaBf3C) {
    +++ description: None
      address:
-        "0x74a0d46BA4F69cAB77A459f8B12dc531c7DaBf3C"
+        "eth:0x74a0d46BA4F69cAB77A459f8B12dc531c7DaBf3C"
    }
```

```diff
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42) {
    +++ description: Escrow contract for the project's gas token (can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for canonical bridge messaging.
      address:
-        "0x7983403dDA368AA7d67145a9b81c5c517F364c42"
+        "eth:0x7983403dDA368AA7d67145a9b81c5c517F364c42"
      values.$admin:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      values.$implementation:
-        "0xEfA1De858293593732a09c9dAA238BEC49595751"
+        "eth:0xEfA1De858293593732a09c9dAA238BEC49595751"
      values.$pastUpgrades.0.2.0:
-        "0x7EfcB76D0e2E776A298aAa603d433336e5F8b6ab"
+        "eth:0x7EfcB76D0e2E776A298aAa603d433336e5F8b6ab"
      values.$pastUpgrades.1.2.0:
-        "0xEfA1De858293593732a09c9dAA238BEC49595751"
+        "eth:0xEfA1De858293593732a09c9dAA238BEC49595751"
      values.activeOutbox:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
+++ description: Allowed to mint the gastoken on L2 and call `enqueueDelayedMessage()` on the bridge.
+++ severity: HIGH
      values.allowedDelayedInboxList.0:
-        "0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
+        "eth:0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
+++ description: Allowed to mint the gastoken on L2 and call `enqueueDelayedMessage()` on the bridge.
+++ severity: HIGH
      values.allowedDelayedInboxList.1:
-        "0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
+        "eth:0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
+++ description: Can make calls as the bridge, steal all funds.
+++ severity: HIGH
      values.allowedOutboxList.0:
-        "0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
+        "eth:0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
+++ description: All Inboxes that were ever set as allowed in the bridge.
+++ severity: HIGH
      values.inboxHistory.0:
-        "0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
+        "eth:0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
+++ description: All Inboxes that were ever set as allowed in the bridge.
+++ severity: HIGH
      values.inboxHistory.1:
-        "0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
+        "eth:0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
      values.nativeToken:
-        "0x9C7BEBa8F6eF6643aBd725e45a4E8387eF260649"
+        "eth:0x9C7BEBa8F6eF6643aBd725e45a4E8387eF260649"
+++ description: All Outboxes that were ever set as allowed in the bridge.
+++ severity: HIGH
      values.outboxHistory.0:
-        "0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
+        "eth:0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
      values.rollup:
-        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      values.sequencerInbox:
-        "0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
      implementationNames.0x7983403dDA368AA7d67145a9b81c5c517F364c42:
-        "TransparentUpgradeableProxy"
      implementationNames.0xEfA1De858293593732a09c9dAA238BEC49595751:
-        "ERC20Bridge"
      implementationNames.eth:0x7983403dDA368AA7d67145a9b81c5c517F364c42:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0xEfA1De858293593732a09c9dAA238BEC49595751:
+        "ERC20Bridge"
    }
```

```diff
    contract Inbox (0x7AD2a94BefF3294a31894cFb5ba4206957a53c19) {
    +++ description: Facilitates sending L1 to L2 messages like depositing ETH, but does not escrow funds.
      address:
-        "0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
+        "eth:0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
      values.$admin:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      values.$implementation:
-        "0x81eEEbb902693A3a90948Fe0A661aedb35271054"
+        "eth:0x81eEEbb902693A3a90948Fe0A661aedb35271054"
      values.$pastUpgrades.0.2.0:
-        "0x31fAAAB44e74eB408d1FC69A14806B4b9cA09da2"
+        "eth:0x31fAAAB44e74eB408d1FC69A14806B4b9cA09da2"
      values.$pastUpgrades.1.2.0:
-        "0x6C051397fee2d79ccf92d1f3c5c6547fEBD838F4"
+        "eth:0x6C051397fee2d79ccf92d1f3c5c6547fEBD838F4"
      values.$pastUpgrades.2.2.0:
-        "0x81eEEbb902693A3a90948Fe0A661aedb35271054"
+        "eth:0x81eEEbb902693A3a90948Fe0A661aedb35271054"
      values.bridge:
-        "0x7983403dDA368AA7d67145a9b81c5c517F364c42"
+        "eth:0x7983403dDA368AA7d67145a9b81c5c517F364c42"
      values.getProxyAdmin:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      values.sequencerInbox:
-        "0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
      implementationNames.0x7AD2a94BefF3294a31894cFb5ba4206957a53c19:
-        "TransparentUpgradeableProxy"
      implementationNames.0x81eEEbb902693A3a90948Fe0A661aedb35271054:
-        "ERC20Inbox"
      implementationNames.eth:0x7AD2a94BefF3294a31894cFb5ba4206957a53c19:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0x81eEEbb902693A3a90948Fe0A661aedb35271054:
+        "ERC20Inbox"
    }
```

```diff
    EOA  (0x81175155D85377C337d92f1FA52Da166C3A4E7Ac) {
    +++ description: None
      address:
-        "0x81175155D85377C337d92f1FA52Da166C3A4E7Ac"
+        "eth:0x81175155D85377C337d92f1FA52Da166C3A4E7Ac"
    }
```

```diff
    contract OneStepProverHostIo (0x856EA788977Bc771E8Ca87471baeC507A0f54771) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine. This version uses the Blobstream DA bridge (eth:0x7Cf3876F681Dbb6EdA8f6FfC45D66B996Df08fAe) as source of truth for the DA referenced by the fault proof.
      address:
-        "0x856EA788977Bc771E8Ca87471baeC507A0f54771"
+        "eth:0x856EA788977Bc771E8Ca87471baeC507A0f54771"
      description:
-        "One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine. This version uses the Blobstream DA bridge (0x7Cf3876F681Dbb6EdA8f6FfC45D66B996Df08fAe) as source of truth for the DA referenced by the fault proof."
+        "One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine. This version uses the Blobstream DA bridge (eth:0x7Cf3876F681Dbb6EdA8f6FfC45D66B996Df08fAe) as source of truth for the DA referenced by the fault proof."
      values.BLOBSTREAM:
-        "0x7Cf3876F681Dbb6EdA8f6FfC45D66B996Df08fAe"
+        "eth:0x7Cf3876F681Dbb6EdA8f6FfC45D66B996Df08fAe"
      implementationNames.0x856EA788977Bc771E8Ca87471baeC507A0f54771:
-        "OneStepProverHostIo"
      implementationNames.eth:0x856EA788977Bc771E8Ca87471baeC507A0f54771:
+        "OneStepProverHostIo"
    }
```

```diff
    EOA  (0x85e70D857F6Fad7AD4ffc3fC95FD0fd8C396A09D) {
    +++ description: None
      address:
-        "0x85e70D857F6Fad7AD4ffc3fC95FD0fd8C396A09D"
+        "eth:0x85e70D857F6Fad7AD4ffc3fC95FD0fd8C396A09D"
    }
```

```diff
    EOA  (0x860e06Fe384D1A3340111e7D142E02642178c053) {
    +++ description: None
      address:
-        "0x860e06Fe384D1A3340111e7D142E02642178c053"
+        "eth:0x860e06Fe384D1A3340111e7D142E02642178c053"
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: A sequencer (registered in this contract) can submit transaction batches or commitments here.
      address:
-        "0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
      values.$admin:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      values.$implementation:
-        "0xC1fB0cCa6e751dEe25e3D537D309d336E8304d50"
+        "eth:0xC1fB0cCa6e751dEe25e3D537D309d336E8304d50"
      values.$pastUpgrades.0.2.0:
-        "0x383f16fB2809a56fC639c1eE2c93Ad2aa7Ee130A"
+        "eth:0x383f16fB2809a56fC639c1eE2c93Ad2aa7Ee130A"
      values.$pastUpgrades.1.2.0:
-        "0xaEd84B70Be8117112a5aa0d93a7fBff463A03b18"
+        "eth:0xaEd84B70Be8117112a5aa0d93a7fBff463A03b18"
      values.$pastUpgrades.2.2.0:
-        "0xC1fB0cCa6e751dEe25e3D537D309d336E8304d50"
+        "eth:0xC1fB0cCa6e751dEe25e3D537D309d336E8304d50"
      values.batchPosterManager:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.batchPosters.0:
-        "0x17F187D978664C96ffD655996a45e085c403AD8b"
+        "eth:0x17F187D978664C96ffD655996a45e085c403AD8b"
      values.batchPosters.1:
-        "0x2E8C0869C173cC07c58186E9DeEA74314635b1E2"
+        "eth:0x2E8C0869C173cC07c58186E9DeEA74314635b1E2"
      values.batchPosters.2:
-        "0x4ed0f98FB4c331e672653E832c55E0f9F402C228"
+        "eth:0x4ed0f98FB4c331e672653E832c55E0f9F402C228"
      values.batchPosters.3:
-        "0x74a0d46BA4F69cAB77A459f8B12dc531c7DaBf3C"
+        "eth:0x74a0d46BA4F69cAB77A459f8B12dc531c7DaBf3C"
      values.batchPosters.4:
-        "0x85e70D857F6Fad7AD4ffc3fC95FD0fd8C396A09D"
+        "eth:0x85e70D857F6Fad7AD4ffc3fC95FD0fd8C396A09D"
      values.batchPosters.5:
-        "0xA4f98Ac0E083C79BAB53A3895082e8a4fbf12CDe"
+        "eth:0xA4f98Ac0E083C79BAB53A3895082e8a4fbf12CDe"
      values.batchPosters.6:
-        "0xCEEAEC6b7e010fE1Ac253Ebd6f93eEBF9249Cd7e"
+        "eth:0xCEEAEC6b7e010fE1Ac253Ebd6f93eEBF9249Cd7e"
      values.batchPosters.7:
-        "0xb9B2AeAe8D160a5bF9cb7FE7B2c8B58c0293FD5e"
+        "eth:0xb9B2AeAe8D160a5bF9cb7FE7B2c8B58c0293FD5e"
      values.batchPosters.8:
-        "0xc7ef93FE91D4658bb422B11C5f8Ae17ae3B86D36"
+        "eth:0xc7ef93FE91D4658bb422B11C5f8Ae17ae3B86D36"
      values.bridge:
-        "0x7983403dDA368AA7d67145a9b81c5c517F364c42"
+        "eth:0x7983403dDA368AA7d67145a9b81c5c517F364c42"
      values.reader4844:
-        "0x58f9a83EF35a241bcAc7EC4fB6e7DBcE2A1D1125"
+        "eth:0x58f9a83EF35a241bcAc7EC4fB6e7DBcE2A1D1125"
      values.rollup:
-        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      implementationNames.0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3:
-        "TransparentUpgradeableProxy"
      implementationNames.0xC1fB0cCa6e751dEe25e3D537D309d336E8304d50:
-        "SequencerInbox"
      implementationNames.eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0xC1fB0cCa6e751dEe25e3D537D309d336E8304d50:
+        "SequencerInbox"
    }
```

```diff
    EOA  (0x8fbEf9f7554aec9CCf62b88D86aE1C91F1599F7C) {
    +++ description: None
      address:
-        "0x8fbEf9f7554aec9CCf62b88D86aE1C91F1599F7C"
+        "eth:0x8fbEf9f7554aec9CCf62b88D86aE1C91F1599F7C"
    }
```

```diff
    contract OneStepProverMath (0x9c40D14A2FC3f0A2f5fe804436f8e312224472C5) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
      address:
-        "0x9c40D14A2FC3f0A2f5fe804436f8e312224472C5"
+        "eth:0x9c40D14A2FC3f0A2f5fe804436f8e312224472C5"
      implementationNames.0x9c40D14A2FC3f0A2f5fe804436f8e312224472C5:
-        "OneStepProverMath"
      implementationNames.eth:0x9c40D14A2FC3f0A2f5fe804436f8e312224472C5:
+        "OneStepProverMath"
    }
```

```diff
    EOA  (0x9DFaA1770bcE35EaB6a163D3cDE6cA1F3Ff7eA66) {
    +++ description: None
      address:
-        "0x9DFaA1770bcE35EaB6a163D3cDE6cA1F3Ff7eA66"
+        "eth:0x9DFaA1770bcE35EaB6a163D3cDE6cA1F3Ff7eA66"
    }
```

```diff
    EOA  (0xa017149a752BDd8723a09Cd6f40c388D38B8d202) {
    +++ description: None
      address:
-        "0xa017149a752BDd8723a09Cd6f40c388D38B8d202"
+        "eth:0xa017149a752BDd8723a09Cd6f40c388D38B8d202"
    }
```

```diff
    EOA  (0xA0737fea60F0601A192E3d2c98865A883ab0bda2) {
    +++ description: None
      address:
-        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
+        "eth:0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
    }
```

```diff
    EOA  (0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038) {
    +++ description: None
      address:
-        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
+        "eth:0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
    }
```

```diff
    contract RollupEventInbox (0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A) {
    +++ description: Helper contract sending configuration data over the bridge during the systems initialization.
      address:
-        "0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
+        "eth:0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
      values.$admin:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      values.$implementation:
-        "0x302275067251F5FcdB9359Bda735fD8f7A4A54c0"
+        "eth:0x302275067251F5FcdB9359Bda735fD8f7A4A54c0"
      values.$pastUpgrades.0.2.0:
-        "0x302275067251F5FcdB9359Bda735fD8f7A4A54c0"
+        "eth:0x302275067251F5FcdB9359Bda735fD8f7A4A54c0"
      values.bridge:
-        "0x7983403dDA368AA7d67145a9b81c5c517F364c42"
+        "eth:0x7983403dDA368AA7d67145a9b81c5c517F364c42"
      values.rollup:
-        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      implementationNames.0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A:
-        "TransparentUpgradeableProxy"
      implementationNames.0x302275067251F5FcdB9359Bda735fD8f7A4A54c0:
-        "ERC20RollupEventInbox"
      implementationNames.eth:0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0x302275067251F5FcdB9359Bda735fD8f7A4A54c0:
+        "ERC20RollupEventInbox"
    }
```

```diff
    EOA  (0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4) {
    +++ description: None
      address:
-        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
+        "eth:0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
    }
```

```diff
    EOA  (0xA4f98Ac0E083C79BAB53A3895082e8a4fbf12CDe) {
    +++ description: None
      address:
-        "0xA4f98Ac0E083C79BAB53A3895082e8a4fbf12CDe"
+        "eth:0xA4f98Ac0E083C79BAB53A3895082e8a4fbf12CDe"
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control permissions for upgrading the system contract implementations.
      address:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      values.$admin:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      values.$implementation:
-        "0x6c21303F5986180B1394d2C89f3e883890E2867b"
+        "eth:0x6c21303F5986180B1394d2C89f3e883890E2867b"
      values.$pastUpgrades.0.2.0:
-        "0x6c21303F5986180B1394d2C89f3e883890E2867b"
+        "eth:0x6c21303F5986180B1394d2C89f3e883890E2867b"
      values.accessControl.ADMIN_ROLE.members.0:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      values.accessControl.EXECUTOR_ROLE.members.0:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
+        "eth:0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      values.executors.0:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
+        "eth:0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      implementationNames.0xa5D23c69894241825dAffB570c3c742C0F52df96:
-        "TransparentUpgradeableProxy"
      implementationNames.0x6c21303F5986180B1394d2C89f3e883890E2867b:
-        "UpgradeExecutor"
      implementationNames.eth:0xa5D23c69894241825dAffB570c3c742C0F52df96:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0x6c21303F5986180B1394d2C89f3e883890E2867b:
+        "UpgradeExecutor"
    }
```

```diff
    EOA  (0xb9B2AeAe8D160a5bF9cb7FE7B2c8B58c0293FD5e) {
    +++ description: None
      address:
-        "0xb9B2AeAe8D160a5bF9cb7FE7B2c8B58c0293FD5e"
+        "eth:0xb9B2AeAe8D160a5bF9cb7FE7B2c8B58c0293FD5e"
    }
```

```diff
    contract ProxyAdmin (0xBbc3872E30C91ef69336937838c2a283F79f7E68) {
    +++ description: None
      address:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      values.owner:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      implementationNames.0xBbc3872E30C91ef69336937838c2a283F79f7E68:
-        "ProxyAdmin"
      implementationNames.eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68:
+        "ProxyAdmin"
    }
```

```diff
    EOA  (0xc7ef93FE91D4658bb422B11C5f8Ae17ae3B86D36) {
    +++ description: None
      address:
-        "0xc7ef93FE91D4658bb422B11C5f8Ae17ae3B86D36"
+        "eth:0xc7ef93FE91D4658bb422B11C5f8Ae17ae3B86D36"
    }
```

```diff
    contract OneStepProverMemory (0xcaBf38d8eADdE0BC6C91655242AFB4Da92a63FCe) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
      address:
-        "0xcaBf38d8eADdE0BC6C91655242AFB4Da92a63FCe"
+        "eth:0xcaBf38d8eADdE0BC6C91655242AFB4Da92a63FCe"
      implementationNames.0xcaBf38d8eADdE0BC6C91655242AFB4Da92a63FCe:
-        "OneStepProverMemory"
      implementationNames.eth:0xcaBf38d8eADdE0BC6C91655242AFB4Da92a63FCe:
+        "OneStepProverMemory"
    }
```

```diff
    EOA  (0xCEEAEC6b7e010fE1Ac253Ebd6f93eEBF9249Cd7e) {
    +++ description: None
      address:
-        "0xCEEAEC6b7e010fE1Ac253Ebd6f93eEBF9249Cd7e"
+        "eth:0xCEEAEC6b7e010fE1Ac253Ebd6f93eEBF9249Cd7e"
    }
```

```diff
    EOA  (0xd1e56283216127E1F40A3752735C94A13d97bc92) {
    +++ description: None
      address:
-        "0xd1e56283216127E1F40A3752735C94A13d97bc92"
+        "eth:0xd1e56283216127E1F40A3752735C94A13d97bc92"
    }
```

```diff
    EOA  (0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C) {
    +++ description: None
      address:
-        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
+        "eth:0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
    }
```

```diff
    EOA  (0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0) {
    +++ description: None
      address:
-        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
+        "eth:0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
    }
```

```diff
    EOA  (0xF3313C48BD8E17b823d5498D62F37019dFEA647D) {
    +++ description: None
      address:
-        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
+        "eth:0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      address:
-        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      values.$admin:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      values.$implementation.0:
-        "0x9B56A789fEDD5df27dBaB53b085F7157397cA17D"
+        "eth:0x9B56A789fEDD5df27dBaB53b085F7157397cA17D"
      values.$implementation.1:
-        "0x5607Ea4b5F6e3F610bD346B36D3143FFf46d1C34"
+        "eth:0x5607Ea4b5F6e3F610bD346B36D3143FFf46d1C34"
      values.$pastUpgrades.0.2.0:
-        "0x0aE4dD666748bF0F6dB5c149Eab1D8aD27820A6A"
+        "eth:0x0aE4dD666748bF0F6dB5c149Eab1D8aD27820A6A"
      values.$pastUpgrades.0.2.1:
-        "0x660ea1675F7323dC3Ba0c8dDFB593225Eb01E3C1"
+        "eth:0x660ea1675F7323dC3Ba0c8dDFB593225Eb01E3C1"
      values.$pastUpgrades.1.2.0:
-        "0x9B56A789fEDD5df27dBaB53b085F7157397cA17D"
+        "eth:0x9B56A789fEDD5df27dBaB53b085F7157397cA17D"
      values.$pastUpgrades.1.2.1:
-        "0x5607Ea4b5F6e3F610bD346B36D3143FFf46d1C34"
+        "eth:0x5607Ea4b5F6e3F610bD346B36D3143FFf46d1C34"
      values.anyTrustFastConfirmer:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.bridge:
-        "0x7983403dDA368AA7d67145a9b81c5c517F364c42"
+        "eth:0x7983403dDA368AA7d67145a9b81c5c517F364c42"
      values.challengeManager:
-        "0x68466622Aae5a9Ffd02530247d75Dd107f06B333"
+        "eth:0x68466622Aae5a9Ffd02530247d75Dd107f06B333"
      values.inbox:
-        "0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
+        "eth:0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
      values.loserStakeEscrow:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.outbox:
-        "0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
+        "eth:0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
      values.owner:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      values.rollupEventInbox:
-        "0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
+        "eth:0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
      values.sequencerInbox:
-        "0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
      values.stakeToken:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.validators.0:
-        "0x006F5B7E2D58fb4E53DEdaB8802FCdf2a5441DC7"
+        "eth:0x006F5B7E2D58fb4E53DEdaB8802FCdf2a5441DC7"
      values.validators.1:
-        "0x11f563dDbF266484Dd910A401A7e44299d80b1d5"
+        "eth:0x11f563dDbF266484Dd910A401A7e44299d80b1d5"
      values.validators.2:
-        "0x16C1D3b4aDB6f0F468FCE7b802cE5AA0A2B06d03"
+        "eth:0x16C1D3b4aDB6f0F468FCE7b802cE5AA0A2B06d03"
      values.validators.3:
-        "0x33Bf8bF5aF3579D0E2305302409A5b6b4173c779"
+        "eth:0x33Bf8bF5aF3579D0E2305302409A5b6b4173c779"
      values.validators.4:
-        "0x401Ba2e5037e3d8D1c32E77Dfd371501618604Bf"
+        "eth:0x401Ba2e5037e3d8D1c32E77Dfd371501618604Bf"
      values.validators.5:
-        "0x8fbEf9f7554aec9CCf62b88D86aE1C91F1599F7C"
+        "eth:0x8fbEf9f7554aec9CCf62b88D86aE1C91F1599F7C"
      values.validators.6:
-        "0x9DFaA1770bcE35EaB6a163D3cDE6cA1F3Ff7eA66"
+        "eth:0x9DFaA1770bcE35EaB6a163D3cDE6cA1F3Ff7eA66"
      values.validators.7:
-        "0xa017149a752BDd8723a09Cd6f40c388D38B8d202"
+        "eth:0xa017149a752BDd8723a09Cd6f40c388D38B8d202"
      values.validators.8:
-        "0xd1e56283216127E1F40A3752735C94A13d97bc92"
+        "eth:0xd1e56283216127E1F40A3752735C94A13d97bc92"
      values.validatorUtils:
-        "0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF"
+        "eth:0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF"
      values.validatorWalletCreator:
-        "0x9CAd81628aB7D8e239F1A5B497313341578c5F71"
+        "eth:0x9CAd81628aB7D8e239F1A5B497313341578c5F71"
      implementationNames.0xf993AF239770932A0EDaB88B6A5ba3708Bd58239:
-        "RollupProxy"
      implementationNames.0x9B56A789fEDD5df27dBaB53b085F7157397cA17D:
-        "RollupAdminLogic"
      implementationNames.0x5607Ea4b5F6e3F610bD346B36D3143FFf46d1C34:
-        "RollupUserLogic"
      implementationNames.eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239:
+        "RollupProxy"
      implementationNames.eth:0x9B56A789fEDD5df27dBaB53b085F7157397cA17D:
+        "RollupAdminLogic"
      implementationNames.eth:0x5607Ea4b5F6e3F610bD346B36D3143FFf46d1C34:
+        "RollupUserLogic"
    }
```

```diff
+   Status: CREATED
    contract OneStepProofEntry (0x0537c93dA3b1f8A525204165d1d93De0534c262f)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
+   Status: CREATED
    contract Outbox (0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF)
    +++ description: Facilitates L2 to L1 contract calls: Messages initiated from L2 (for example withdrawal messages) eventually resolve in execution on L1.
```

```diff
+   Status: CREATED
    contract ValidatorUtils (0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF)
    +++ description: This contract implements view only utilities for validators.
```

```diff
+   Status: CREATED
    contract Conduit Multisig 1 (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ChallengeManager (0x68466622Aae5a9Ffd02530247d75Dd107f06B333)
    +++ description: Contract that allows challenging state roots. Can be called through the RollupProxy by Validators or the UpgradeExecutor.
```

```diff
+   Status: CREATED
    contract OneStepProver0 (0x6982e35C878cD2b5aF8Dcf06f33c4EfB01D6f482)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
+   Status: CREATED
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42)
    +++ description: Escrow contract for the project's gas token (can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for canonical bridge messaging.
```

```diff
+   Status: CREATED
    contract Inbox (0x7AD2a94BefF3294a31894cFb5ba4206957a53c19)
    +++ description: Facilitates sending L1 to L2 messages like depositing ETH, but does not escrow funds.
```

```diff
+   Status: CREATED
    contract OneStepProverHostIo (0x856EA788977Bc771E8Ca87471baeC507A0f54771)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine. This version uses the Blobstream DA bridge (eth:0x7Cf3876F681Dbb6EdA8f6FfC45D66B996Df08fAe) as source of truth for the DA referenced by the fault proof.
```

```diff
+   Status: CREATED
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3)
    +++ description: A sequencer (registered in this contract) can submit transaction batches or commitments here.
```

```diff
+   Status: CREATED
    contract OneStepProverMath (0x9c40D14A2FC3f0A2f5fe804436f8e312224472C5)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
+   Status: CREATED
    contract RollupEventInbox (0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A)
    +++ description: Helper contract sending configuration data over the bridge during the systems initialization.
```

```diff
+   Status: CREATED
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96)
    +++ description: Central contract defining the access control permissions for upgrading the system contract implementations.
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0xBbc3872E30C91ef69336937838c2a283F79f7E68)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OneStepProverMemory (0xcaBf38d8eADdE0BC6C91655242AFB4Da92a63FCe)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
+   Status: CREATED
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239)
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
```

Generated with discovered.json: 0x066a41304433fe903f1bc9893d11ab5be83e6c18

# Diff at Fri, 11 Jul 2025 12:28:41 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@6f02976fdd9466dab085b947bf3c4d28ccef1010 block: 22744036
- current block number: 22895937

## Description

operator address removed.

## Watched changes

```diff
    contract ValidatorUtils (0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF) {
    +++ description: This contract implements view only utilities for validators.
      values.GRAVITY_STAKERS.0.0:
-        "0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634"
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: A sequencer (registered in this contract) can submit transaction batches or commitments here.
      values.batchPosters.6:
-        "0xBa369bd77a346babCd282cB1a015194E8ec54542"
      values.setIsBatchPosterCount:
-        2
+        3
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
+++ description: Increments on each Validator change.
      values.setValidatorCount:
-        2
+        3
      values.stakerCount:
-        2
+        1
      values.validators.3:
-        "0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634"
    }
```

Generated with discovered.json: 0x909753b169d529010e1ceedc42f46ecd6c8a7948

# Diff at Fri, 04 Jul 2025 12:19:01 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f56dc47fe915564d4555300304da4d3bcbc087f block: 22744036
- current block number: 22744036

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22744036 (main branch discovery), not current.

```diff
    EOA  (0x006F5B7E2D58fb4E53DEdaB8802FCdf2a5441DC7) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
    }
```

```diff
    EOA  (0x11f563dDbF266484Dd910A401A7e44299d80b1d5) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
    }
```

```diff
    EOA  (0x16C1D3b4aDB6f0F468FCE7b802cE5AA0A2B06d03) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
    }
```

```diff
    EOA  (0x17F187D978664C96ffD655996a45e085c403AD8b) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
    }
```

```diff
    EOA  (0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
    }
```

```diff
    EOA  (0x2E8C0869C173cC07c58186E9DeEA74314635b1E2) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
    }
```

```diff
    EOA  (0x33Bf8bF5aF3579D0E2305302409A5b6b4173c779) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
    }
```

```diff
    EOA  (0x401Ba2e5037e3d8D1c32E77Dfd371501618604Bf) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
    }
```

```diff
    contract Conduit Multisig 1 (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.0.via.0.address:
-        "ethereum:0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions.0.from:
-        "ethereum:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      receivedPermissions.1.via.1.address:
-        "ethereum:0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions.1.via.0.address:
-        "ethereum:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      receivedPermissions.1.from:
-        "ethereum:0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
+        "eth:0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
      receivedPermissions.2.via.1.address:
-        "ethereum:0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions.2.via.0.address:
-        "ethereum:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      receivedPermissions.2.from:
-        "ethereum:0x68466622Aae5a9Ffd02530247d75Dd107f06B333"
+        "eth:0x68466622Aae5a9Ffd02530247d75Dd107f06B333"
      receivedPermissions.3.via.1.address:
-        "ethereum:0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions.3.via.0.address:
-        "ethereum:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      receivedPermissions.3.from:
-        "ethereum:0x7983403dDA368AA7d67145a9b81c5c517F364c42"
+        "eth:0x7983403dDA368AA7d67145a9b81c5c517F364c42"
      receivedPermissions.4.via.1.address:
-        "ethereum:0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions.4.via.0.address:
-        "ethereum:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      receivedPermissions.4.from:
-        "ethereum:0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
+        "eth:0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
      receivedPermissions.5.via.1.address:
-        "ethereum:0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions.5.via.0.address:
-        "ethereum:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      receivedPermissions.5.from:
-        "ethereum:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
      receivedPermissions.6.via.1.address:
-        "ethereum:0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions.6.via.0.address:
-        "ethereum:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      receivedPermissions.6.from:
-        "ethereum:0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
+        "eth:0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
      receivedPermissions.7.via.1.address:
-        "ethereum:0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions.7.via.0.address:
-        "ethereum:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      receivedPermissions.7.from:
-        "ethereum:0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions.8.via.0.address:
-        "ethereum:0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions.8.from:
-        "ethereum:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      directlyReceivedPermissions.0.from:
-        "ethereum:0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
    }
```

```diff
    EOA  (0x4ed0f98FB4c331e672653E832c55E0f9F402C228) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
    }
```

```diff
    EOA  (0x74a0d46BA4F69cAB77A459f8B12dc531c7DaBf3C) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
    }
```

```diff
    EOA  (0x85e70D857F6Fad7AD4ffc3fC95FD0fd8C396A09D) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
    }
```

```diff
    EOA  (0x8fbEf9f7554aec9CCf62b88D86aE1C91F1599F7C) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
    }
```

```diff
    EOA  (0x9DFaA1770bcE35EaB6a163D3cDE6cA1F3Ff7eA66) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
    }
```

```diff
    EOA  (0xa017149a752BDd8723a09Cd6f40c388D38B8d202) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
    }
```

```diff
    EOA  (0xA4f98Ac0E083C79BAB53A3895082e8a4fbf12CDe) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control permissions for upgrading the system contract implementations.
      directlyReceivedPermissions.0.from:
-        "ethereum:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "eth:0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      directlyReceivedPermissions.1.from:
-        "ethereum:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      directlyReceivedPermissions.2.from:
-        "ethereum:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
    }
```

```diff
    EOA  (0xb9B2AeAe8D160a5bF9cb7FE7B2c8B58c0293FD5e) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
    }
```

```diff
    EOA  (0xBa369bd77a346babCd282cB1a015194E8ec54542) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
    }
```

```diff
    contract ProxyAdmin (0xBbc3872E30C91ef69336937838c2a283F79f7E68) {
    +++ description: None
      directlyReceivedPermissions.0.from:
-        "ethereum:0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
+        "eth:0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
      directlyReceivedPermissions.1.from:
-        "ethereum:0x68466622Aae5a9Ffd02530247d75Dd107f06B333"
+        "eth:0x68466622Aae5a9Ffd02530247d75Dd107f06B333"
      directlyReceivedPermissions.2.from:
-        "ethereum:0x7983403dDA368AA7d67145a9b81c5c517F364c42"
+        "eth:0x7983403dDA368AA7d67145a9b81c5c517F364c42"
      directlyReceivedPermissions.3.from:
-        "ethereum:0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
+        "eth:0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
      directlyReceivedPermissions.4.from:
-        "ethereum:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
      directlyReceivedPermissions.5.from:
-        "ethereum:0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
+        "eth:0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
      directlyReceivedPermissions.6.from:
-        "ethereum:0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "eth:0xa5D23c69894241825dAffB570c3c742C0F52df96"
    }
```

```diff
    EOA  (0xc7ef93FE91D4658bb422B11C5f8Ae17ae3B86D36) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
    }
```

```diff
    EOA  (0xCEEAEC6b7e010fE1Ac253Ebd6f93eEBF9249Cd7e) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "eth:0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
    }
```

```diff
    EOA  (0xd1e56283216127E1F40A3752735C94A13d97bc92) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "eth:0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
    }
```

Generated with discovered.json: 0xa5778fd1d2e204dc20136324a349b92266436fc7

# Diff at Fri, 20 Jun 2025 06:55:48 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@70109db050355e01a50f54497c60fdd17bbdbc2d block: 22615667
- current block number: 22744036

## Description

Add 9 batchposters and validators (conduit).

## Watched changes

```diff
    contract ValidatorUtils (0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF) {
    +++ description: This contract implements view only utilities for validators.
      values.GRAVITY_STAKERS.1.1:
+        "0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634"
      values.GRAVITY_STAKERS.1.0:
-        "0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634"
+        "0x16C1D3b4aDB6f0F468FCE7b802cE5AA0A2B06d03"
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: A sequencer (registered in this contract) can submit transaction batches or commitments here.
      values.batchPosters.9:
+        "0x85e70D857F6Fad7AD4ffc3fC95FD0fd8C396A09D"
      values.batchPosters.8:
+        "0x4ed0f98FB4c331e672653E832c55E0f9F402C228"
      values.batchPosters.7:
+        "0x74a0d46BA4F69cAB77A459f8B12dc531c7DaBf3C"
      values.batchPosters.6:
+        "0xb9B2AeAe8D160a5bF9cb7FE7B2c8B58c0293FD5e"
      values.batchPosters.5:
+        "0x2E8C0869C173cC07c58186E9DeEA74314635b1E2"
      values.batchPosters.4:
+        "0xCEEAEC6b7e010fE1Ac253Ebd6f93eEBF9249Cd7e"
      values.batchPosters.3:
+        "0xA4f98Ac0E083C79BAB53A3895082e8a4fbf12CDe"
      values.batchPosters.2:
+        "0xc7ef93FE91D4658bb422B11C5f8Ae17ae3B86D36"
      values.batchPosters.1:
+        "0x17F187D978664C96ffD655996a45e085c403AD8b"
      values.setIsBatchPosterCount:
-        1
+        2
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
+++ description: Increments on each Validator change.
      values.setValidatorCount:
-        1
+        2
      values.stakerCount:
-        1
+        2
      values.validators.9:
+        "0x006F5B7E2D58fb4E53DEdaB8802FCdf2a5441DC7"
      values.validators.8:
+        "0x8fbEf9f7554aec9CCf62b88D86aE1C91F1599F7C"
      values.validators.7:
+        "0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634"
      values.validators.6:
+        "0x16C1D3b4aDB6f0F468FCE7b802cE5AA0A2B06d03"
      values.validators.5:
+        "0x401Ba2e5037e3d8D1c32E77Dfd371501618604Bf"
      values.validators.4:
+        "0xa017149a752BDd8723a09Cd6f40c388D38B8d202"
      values.validators.3:
+        "0x9DFaA1770bcE35EaB6a163D3cDE6cA1F3Ff7eA66"
      values.validators.2:
+        "0xd1e56283216127E1F40A3752735C94A13d97bc92"
      values.validators.1:
+        "0x11f563dDbF266484Dd910A401A7e44299d80b1d5"
      values.validators.0:
-        "0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634"
+        "0x33Bf8bF5aF3579D0E2305302409A5b6b4173c779"
    }
```

Generated with discovered.json: 0xa5f9fbf2e5b7e52af609b9a38615585aa8fca6df

# Diff at Wed, 18 Jun 2025 12:22:52 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@a8e4f22a1441bd5040898cc3d3d62b3582942b65 block: 22615667
- current block number: 22615667

## Description

config: wasmmoduleroot map updated.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22615667 (main branch discovery), not current.

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      usedTypes.0.arg.0xdb698a2576298f25448bc092e52cf13b1e24141c997135d70f217d674bbeb69a:
+        "ArbOS v40 wasmModuleRoot"
    }
```

Generated with discovered.json: 0x77b49f02730babd63d482f5bc203def7127f303f

# Diff at Mon, 02 Jun 2025 08:00:05 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@2fee84b782a329885c84742cf9cf43143842a2d5 block: 22445463
- current block number: 22615667

## Description

conduit ms signer change.

## Watched changes

```diff
    contract Conduit Multisig 1 (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      values.$members.10:
+        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
      values.$members.9:
-        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
+        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
      values.$members.8:
-        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
+        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
      values.$members.7:
-        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
+        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
      values.$members.6:
-        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
+        "0x81175155D85377C337d92f1FA52Da166C3A4E7Ac"
      values.multisigThreshold:
-        "4 of 10 (40%)"
+        "4 of 11 (36%)"
    }
```

Generated with discovered.json: 0x2de706658ba5d3c88034a97440eace73a10d08ad

# Diff at Tue, 27 May 2025 08:27:01 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@fd658a9ed4bbd45fc5705d23b1906ca057d0d8b0 block: 22445463
- current block number: 22445463

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22445463 (main branch discovery), not current.

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      sourceHashes.2:
-        "0xb8da0b3748daac768860783e8555198fd2d1bbdffb775b81557a7124890c7eca"
      sourceHashes.1:
-        "0x9349e73cbc2d2b818c1d79711574ba210b56249d8d3845bc78c776caf8f8ff42"
+        "0xb8da0b3748daac768860783e8555198fd2d1bbdffb775b81557a7124890c7eca"
      sourceHashes.0:
-        "0x7ee21b18b2e18c636bfafc08ff72692cc43302b2599ba75f0abad67282866dd5"
+        "0x86c7032e0f4b5468f1eb92c79b73ab4c7f053fc7bdfc88fdd360e2fe7baa1072"
    }
```

Generated with discovered.json: 0x3d5b43df3f567cadd40ab876deb245494ae07b11

# Diff at Fri, 23 May 2025 09:40:56 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 22445463
- current block number: 22445463

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22445463 (main branch discovery), not current.

```diff
    EOA  (0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634) {
    +++ description: None
      receivedPermissions.0.role:
+        ".validators"
    }
```

```diff
    contract Conduit Multisig 1 (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.8.role:
+        "admin"
      receivedPermissions.7.role:
+        "admin"
      receivedPermissions.6.role:
+        "admin"
      receivedPermissions.5.role:
+        "admin"
      receivedPermissions.4.role:
+        "admin"
      receivedPermissions.3.role:
+        "admin"
      receivedPermissions.2.role:
+        "admin"
      receivedPermissions.1.role:
+        "admin"
      receivedPermissions.0.role:
+        ".owner"
      directlyReceivedPermissions.0.role:
+        ".executors"
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control permissions for upgrading the system contract implementations.
      directlyReceivedPermissions.2.role:
+        "admin"
      directlyReceivedPermissions.1.role:
+        ".owner"
      directlyReceivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    EOA  (0xBa369bd77a346babCd282cB1a015194E8ec54542) {
    +++ description: None
      receivedPermissions.0.role:
+        ".batchPosters"
    }
```

```diff
    contract ProxyAdmin (0xBbc3872E30C91ef69336937838c2a283F79f7E68) {
    +++ description: None
      directlyReceivedPermissions.6.role:
+        "admin"
      directlyReceivedPermissions.5.role:
+        "admin"
      directlyReceivedPermissions.4.role:
+        "admin"
      directlyReceivedPermissions.3.role:
+        "admin"
      directlyReceivedPermissions.2.role:
+        "admin"
      directlyReceivedPermissions.1.role:
+        "admin"
      directlyReceivedPermissions.0.role:
+        "admin"
    }
```

Generated with discovered.json: 0x8cb921d0c14560eb23ad4ff6697d8a1a097396b8

# Diff at Fri, 09 May 2025 10:57:55 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@b9a3516de49f42efd9d26f04918d74a8d92c6204 block: 22396423
- current block number: 22445463

## Description

hostIO verified, blobstreamed!

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22396423 (main branch discovery), not current.

```diff
    contract OneStepProverHostIo (0x856EA788977Bc771E8Ca87471baeC507A0f54771) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine. This version uses the Blobstream DA bridge (0x7Cf3876F681Dbb6EdA8f6FfC45D66B996Df08fAe) as source of truth for the DA referenced by the fault proof.
      unverified:
-        true
      description:
-        "One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine."
+        "One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine. This version uses the Blobstream DA bridge (0x7Cf3876F681Dbb6EdA8f6FfC45D66B996Df08fAe) as source of truth for the DA referenced by the fault proof."
      values.BLOBSTREAM:
+        "0x7Cf3876F681Dbb6EdA8f6FfC45D66B996Df08fAe"
      values.CELESTIA_MESSAGE_HEADER_FLAG:
+        "0x63"
      implementationNames.0x856EA788977Bc771E8Ca87471baeC507A0f54771:
-        ""
+        "OneStepProverHostIo"
      template:
+        "orbitstack/OneStepProverHostIo_Celestia"
      sourceHashes:
+        ["0x73c3c22d54ad12907dffd5f715cea7f724c65ba212d2b3da84ded2333fd76ce8"]
    }
```

Generated with discovered.json: 0x5b5f4a34afa4bf24220db86c335b75aaddf18355

# Diff at Fri, 02 May 2025 17:23:43 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@c598e33a0c469175b7abbd6c2a13b47b63d6b6a4 block: 22367357
- current block number: 22396423

## Description

Upgrade to Celestia DA + blobstream, but the HostIO contract (pointing to blobstream) is unverified.

Decompilation allows to verify that it is pointing to `0x7cf3876f681dbb6eda8f6ffc45d66b996df08fae` at least.

using Celestia-Nitro v3.3.2 root.

## Watched changes

```diff
-   Status: DELETED
    contract OneStepProverHostIo (0x0003A96B27ce73505b43ea1b71a5aB06bec568C4)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
-   Status: DELETED
    contract OneStepProverMemory (0x1cD76B9C33b2e3b04D7B181399d492B3e49AD7fB)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
-   Status: DELETED
    contract OneStepProver0 (0x2dCCAbE89cF76132619a9B18e9F9e48E837222b5)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
    contract ChallengeManager (0x68466622Aae5a9Ffd02530247d75Dd107f06B333) {
    +++ description: Contract that allows challenging state roots. Can be called through the RollupProxy by Validators or the UpgradeExecutor.
      values.$implementation:
-        "0x02E05A9245C5853f895daDcc3A8216C953C8736B"
+        "0x531c78AA0e0126Cef52c2027AA026Aa6e2929194"
      values.$pastUpgrades.2:
+        ["2024-05-18T17:37:23.000Z","0x8cc45e895fa944fdd15443047c58bd3633eb5cf885d54d46d081010615022312",["0x1D901DD7A5eFE421C3C437B147040E5AF22E6A43"]]
      values.$pastUpgrades.1.2:
-        "2024-05-18T17:37:23.000Z"
+        "2025-01-27T14:58:35.000Z"
      values.$pastUpgrades.1.1:
-        ["0x1D901DD7A5eFE421C3C437B147040E5AF22E6A43"]
+        "0xe11d3d807bd73ee2b941638788ccc55113045530f5b5fa5f2c7150ca54af8787"
      values.$pastUpgrades.1.0:
-        "0x8cc45e895fa944fdd15443047c58bd3633eb5cf885d54d46d081010615022312"
+        ["0x02E05A9245C5853f895daDcc3A8216C953C8736B"]
      values.$pastUpgrades.0.2:
-        "2025-01-27T14:58:35.000Z"
+        "0x89bb6d5ad4aee106eb3057f96b1c3dc685bc40dc798d267f429c486b114fbd25"
      values.$pastUpgrades.0.1:
-        "0xe11d3d807bd73ee2b941638788ccc55113045530f5b5fa5f2c7150ca54af8787"
+        "2025-04-28T22:49:23.000Z"
      values.$pastUpgrades.0.0.0:
-        "0x02E05A9245C5853f895daDcc3A8216C953C8736B"
+        "0x531c78AA0e0126Cef52c2027AA026Aa6e2929194"
      values.$upgradeCount:
-        2
+        3
      values.osp:
-        "0x8Faa21891B0b928afEbd5314D1D313f8f7B34DaC"
+        "0x0537c93dA3b1f8A525204165d1d93De0534c262f"
    }
```

```diff
    contract Inbox (0x7AD2a94BefF3294a31894cFb5ba4206957a53c19) {
    +++ description: Facilitates sending L1 to L2 messages like depositing ETH, but does not escrow funds.
      values.$implementation:
-        "0x6C051397fee2d79ccf92d1f3c5c6547fEBD838F4"
+        "0x81eEEbb902693A3a90948Fe0A661aedb35271054"
      values.$pastUpgrades.2:
+        ["2025-04-28T22:49:23.000Z","0x89bb6d5ad4aee106eb3057f96b1c3dc685bc40dc798d267f429c486b114fbd25",["0x81eEEbb902693A3a90948Fe0A661aedb35271054"]]
      values.$upgradeCount:
-        2
+        3
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: A sequencer (registered in this contract) can submit transaction batches or commitments here.
      sourceHashes.0:
-        "0x6bb86ac4bd0d31e049f543fcf0a8f94c952252222f115246ef9d5b8104d803cc"
+        "0x4030f12794a5a07697b98400d423a426b39fd6f2320b39ee377d700d4fafdc58"
      values.$implementation:
-        "0xaEd84B70Be8117112a5aa0d93a7fBff463A03b18"
+        "0xC1fB0cCa6e751dEe25e3D537D309d336E8304d50"
      values.$pastUpgrades.2:
+        ["2025-04-28T22:49:23.000Z","0x89bb6d5ad4aee106eb3057f96b1c3dc685bc40dc798d267f429c486b114fbd25",["0xC1fB0cCa6e751dEe25e3D537D309d336E8304d50"]]
      values.$upgradeCount:
-        2
+        3
      values.reader4844:
-        "0x6c5c9E6c080a6C25f49DfFE85cfA71aaEAAfdE74"
+        "0x58f9a83EF35a241bcAc7EC4fB6e7DBcE2A1D1125"
      values.sequencerVersion:
-        "0x88"
+        "0x63"
      values.CELESTIA_MESSAGE_HEADER_FLAG:
+        "0x63"
    }
```

```diff
-   Status: DELETED
    contract OneStepProofEntry (0x8Faa21891B0b928afEbd5314D1D313f8f7B34DaC)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
-   Status: DELETED
    contract OneStepProverMath (0xCf4b98cFF2976E4eb579B9498f398b5bd279A6eD)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
+++ description: ArbOS version derived from known wasmModuleRoots.
      values.arbOsFromWmRoot:
-        "ArbOS v32 wasmModuleRoot"
+        "Celestia Nitro 3.3.2 wasmModuleRoot"
+++ description: Root hash of the WASM module used for execution, like a fingerprint of the L2 logic. Can be associated with ArbOS versions.
      values.wasmModuleRoot:
-        "0x184884e1eb9fefdc158f6c8ac912bb183bf3cf83f0090317e0bc4ac5860baa39"
+        "0xaf1dbdfceb871c00bfbb1675983133df04f0ed04e89647812513c091e3a982b3"
    }
```

```diff
+   Status: CREATED
    contract OneStepProofEntry (0x0537c93dA3b1f8A525204165d1d93De0534c262f)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
+   Status: CREATED
    contract OneStepProver0 (0x6982e35C878cD2b5aF8Dcf06f33c4EfB01D6f482)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
+   Status: CREATED
    contract OneStepProverHostIo (0x856EA788977Bc771E8Ca87471baeC507A0f54771)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
+   Status: CREATED
    contract OneStepProverMath (0x9c40D14A2FC3f0A2f5fe804436f8e312224472C5)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
+   Status: CREATED
    contract OneStepProverMemory (0xcaBf38d8eADdE0BC6C91655242AFB4Da92a63FCe)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

## Source code changes

```diff
.../OneStepProverHostIo.sol => /dev/null           | 1860 --------------------
 .../SequencerInbox/SequencerInbox.sol              |  117 +-
 2 files changed, 46 insertions(+), 1931 deletions(-)
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22367357 (main branch discovery), not current.

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      usedTypes.0.arg.0xaf1dbdfceb871c00bfbb1675983133df04f0ed04e89647812513c091e3a982b3:
+        "Celestia Nitro 3.3.2 wasmModuleRoot"
    }
```

Generated with discovered.json: 0x221d1c39ff4a02730a87d97e92c28985cbd92099

# Diff at Tue, 29 Apr 2025 08:19:03 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 22367357
- current block number: 22367357

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22367357 (main branch discovery), not current.

```diff
    contract Outbox (0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF) {
    +++ description: Facilitates L2 to L1 contract calls: Messages initiated from L2 (for example withdrawal messages) eventually resolve in execution on L1.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"},{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]}]
    }
```

```diff
    contract ChallengeManager (0x68466622Aae5a9Ffd02530247d75Dd107f06B333) {
    +++ description: Contract that allows challenging state roots. Can be called through the RollupProxy by Validators or the UpgradeExecutor.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"},{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]}]
    }
```

```diff
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42) {
    +++ description: Escrow contract for the project's gas token (can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for canonical bridge messaging.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"},{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]}]
    }
```

```diff
    contract Inbox (0x7AD2a94BefF3294a31894cFb5ba4206957a53c19) {
    +++ description: Facilitates sending L1 to L2 messages like depositing ETH, but does not escrow funds.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"},{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]}]
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: A sequencer (registered in this contract) can submit transaction batches or commitments here.
      issuedPermissions:
-        [{"permission":"sequence","to":"0xBa369bd77a346babCd282cB1a015194E8ec54542","description":"Can submit transaction batches or commitments to the SequencerInbox contract on the host chain.","via":[]},{"permission":"upgrade","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"},{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]}]
    }
```

```diff
    contract RollupEventInbox (0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A) {
    +++ description: Helper contract sending configuration data over the bridge during the systems initialization.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"},{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]}]
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control permissions for upgrading the system contract implementations.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"},{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]}]
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      issuedPermissions:
-        [{"permission":"interact","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","description":"Pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability, DACs and the fastConfirmer role, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes.","via":[{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}]},{"permission":"upgrade","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}]},{"permission":"validate","to":"0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634","description":"Can propose new state roots (called nodes) and challenge state roots on the host chain.","via":[]}]
    }
```

Generated with discovered.json: 0xe62efb899b5e5194460d44dd1815819ef157efd5

# Diff at Mon, 28 Apr 2025 11:47:09 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@640aad31846aa48203969768d234f58dfd9896e5 block: 22046063
- current block number: 22367357

## Description

Minor Arbitrum upgrade (non-18 decimals gas token support) [3.1.0](https://github.com/OffchainLabs/nitro-contracts/releases/tag/v3.1.0) that everyone is doing atm.

## Watched changes

```diff
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42) {
    +++ description: Escrow contract for the project's gas token (can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for canonical bridge messaging.
      sourceHashes.1:
-        "0x057de68a7007d55f4394ba6eafb2c802efcaf13583ff9342ea4d0ee3924d9be1"
+        "0xa7e3f6c355703ed46fcb2156862c4f01792b87beb10a87a81ce3bd5beee79b67"
      sourceHashes.0:
-        "0xa7e3f6c355703ed46fcb2156862c4f01792b87beb10a87a81ce3bd5beee79b67"
+        "0x32c73666d391a33c17183e4ab20bcb0f2b925d8a99da436d2ff99c13f403e289"
      values.$implementation:
-        "0x7EfcB76D0e2E776A298aAa603d433336e5F8b6ab"
+        "0xEfA1De858293593732a09c9dAA238BEC49595751"
      values.$pastUpgrades.1:
+        ["2024-05-18T17:37:23.000Z","0x8cc45e895fa944fdd15443047c58bd3633eb5cf885d54d46d081010615022312",["0x7EfcB76D0e2E776A298aAa603d433336e5F8b6ab"]]
      values.$pastUpgrades.0.2:
-        ["0x7EfcB76D0e2E776A298aAa603d433336e5F8b6ab"]
+        "2025-04-25T21:26:59.000Z"
      values.$pastUpgrades.0.1:
-        "2024-05-18T17:37:23.000Z"
+        "0x95770a864151002415a2e504452a4bccb01906d9a94d74cbd9cb651b337317bd"
      values.$pastUpgrades.0.0:
-        "0x8cc45e895fa944fdd15443047c58bd3633eb5cf885d54d46d081010615022312"
+        ["0xEfA1De858293593732a09c9dAA238BEC49595751"]
      values.$upgradeCount:
-        1
+        2
      values.nativeTokenDecimals:
+        18
    }
```

```diff
    contract Inbox (0x7AD2a94BefF3294a31894cFb5ba4206957a53c19) {
    +++ description: Facilitates sending L1 to L2 messages like depositing ETH, but does not escrow funds.
      sourceHashes.0:
-        "0xcb390b491549387c8fcc09fb22fbea7adf54cc74b7247a0c738369ddd7049b92"
+        "0x25984fdfffb8141859c99299fb29e7a7460732d77111e5fe23792baa99f336a3"
      values.$implementation:
-        "0x31fAAAB44e74eB408d1FC69A14806B4b9cA09da2"
+        "0x6C051397fee2d79ccf92d1f3c5c6547fEBD838F4"
      values.$pastUpgrades.1:
+        ["2025-04-25T21:26:59.000Z","0x95770a864151002415a2e504452a4bccb01906d9a94d74cbd9cb651b337317bd",["0x6C051397fee2d79ccf92d1f3c5c6547fEBD838F4"]]
      values.$upgradeCount:
-        1
+        2
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: A sequencer (registered in this contract) can submit transaction batches or commitments here.
      sourceHashes.0:
-        "0x50cf57b01499408fa99da27cf0fee96ec30f0d40667d1aa090c442bc80f0636b"
+        "0x6bb86ac4bd0d31e049f543fcf0a8f94c952252222f115246ef9d5b8104d803cc"
      values.$implementation:
-        "0x383f16fB2809a56fC639c1eE2c93Ad2aa7Ee130A"
+        "0xaEd84B70Be8117112a5aa0d93a7fBff463A03b18"
      values.$pastUpgrades.1:
+        ["2024-05-18T17:37:23.000Z","0x8cc45e895fa944fdd15443047c58bd3633eb5cf885d54d46d081010615022312",["0x383f16fB2809a56fC639c1eE2c93Ad2aa7Ee130A"]]
      values.$pastUpgrades.0.2:
-        "2024-05-18T17:37:23.000Z"
+        ["0xaEd84B70Be8117112a5aa0d93a7fBff463A03b18"]
      values.$pastUpgrades.0.1:
-        ["0x383f16fB2809a56fC639c1eE2c93Ad2aa7Ee130A"]
+        "2025-04-25T21:26:59.000Z"
      values.$pastUpgrades.0.0:
-        "0x8cc45e895fa944fdd15443047c58bd3633eb5cf885d54d46d081010615022312"
+        "0x95770a864151002415a2e504452a4bccb01906d9a94d74cbd9cb651b337317bd"
      values.$upgradeCount:
-        1
+        2
      values.reader4844:
-        "0x7Deda2425eC2d4EA0DF689A78de2fBF002075576"
+        "0x6c5c9E6c080a6C25f49DfFE85cfA71aaEAAfdE74"
    }
```

## Source code changes

```diff
.../Bridge/ERC20Bridge.sol                         | 54 +++++++++++++
 .../{.flat@22046063 => .flat}/Inbox/ERC20Inbox.sol | 92 +++++++++++++++++++---
 .../SequencerInbox/SequencerInbox.sol              | 24 ++++--
 3 files changed, 152 insertions(+), 18 deletions(-)
```

Generated with discovered.json: 0x5df81552e604b00744fc94cbfb4e11b80e108fe2

# Diff at Tue, 18 Mar 2025 08:12:50 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@4ef7a8dbcec1cd9fec77aae2b73d81347a4ffb13 block: 22046063
- current block number: 22046063

## Description

Config: change Multisig names.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22046063 (main branch discovery), not current.

```diff
    contract Conduit Multisig 1 (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      name:
-        "ConduitMultisig"
+        "Conduit Multisig 1"
    }
```

Generated with discovered.json: 0x09f31bcdb379d6571990f6b0a76aa013a0ffcc37

# Diff at Fri, 14 Mar 2025 15:39:11 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@002bac09dea3b1154ecc36736323fb7552478ce4 block: 21994041
- current block number: 22046063

## Description

Conduit MS changes.

## Watched changes

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      values.$members.9:
+        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
      values.$members.8:
-        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
+        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
      values.$members.7:
-        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
+        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
      values.$members.6:
-        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
+        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
      values.$members.5:
-        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
+        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
      values.$members.4:
-        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
+        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
      values.$members.3:
-        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
+        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
      values.$members.2:
-        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
+        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
      values.$members.1:
-        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
+        "0x50930d652266EF4127FA3A1906B7Cb9951076628"
      values.$members.0:
-        "0x50930d652266EF4127FA3A1906B7Cb9951076628"
+        "0x860e06Fe384D1A3340111e7D142E02642178c053"
      values.multisigThreshold:
-        "4 of 9 (44%)"
+        "4 of 10 (40%)"
    }
```

Generated with discovered.json: 0xe661691e33dbd519d58d5e23a4605ad6c61454be

# Diff at Fri, 07 Mar 2025 09:15:21 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@454ef41fea41bcea030780b23fd1f11519ff78d2 block: 21723939
- current block number: 21994041

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21723939 (main branch discovery), not current.

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      values.isPostBoLD:
+        false
    }
```

Generated with discovered.json: 0x511d57fee709904dd3dd4756874da504a184d6fe

# Diff at Thu, 06 Mar 2025 09:39:01 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@7119c715545bc86a4194761f42815f811ac6307a block: 21723939
- current block number: 21723939

## Description

Config related: set severity for arbitrum inbox/outbox changes to high and add historical In- and Outboxes via events.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21723939 (main branch discovery), not current.

```diff
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42) {
    +++ description: Escrow contract for the project's gas token (can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for canonical bridge messaging.
+++ description: All Inboxes that were ever set as allowed in the bridge.
+++ severity: HIGH
      values.inboxHistory:
+        ["0x7AD2a94BefF3294a31894cFb5ba4206957a53c19","0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"]
+++ description: All Outboxes that were ever set as allowed in the bridge.
+++ severity: HIGH
      values.outboxHistory:
+        ["0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"]
      fieldMeta:
+        {"allowedOutboxList":{"severity":"HIGH","description":"Can make calls as the bridge, steal all funds."},"outboxHistory":{"severity":"HIGH","description":"All Outboxes that were ever set as allowed in the bridge."},"allowedDelayedInboxList":{"severity":"HIGH","description":"Allowed to mint the gastoken on L2 and call `enqueueDelayedMessage()` on the bridge."},"inboxHistory":{"severity":"HIGH","description":"All Inboxes that were ever set as allowed in the bridge."}}
    }
```

Generated with discovered.json: 0x42cd01a98fa2b8f3a5895bfa036f7da78f880533

# Diff at Tue, 04 Mar 2025 10:39:12 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@98d260b45fe0d2195ce5e629bd7b200c8706e8ba block: 21723939
- current block number: 21723939

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21723939 (main branch discovery), not current.

```diff
    contract OneStepProverHostIo (0x0003A96B27ce73505b43ea1b71a5aB06bec568C4) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
      sinceBlock:
+        20569170
    }
```

```diff
    contract Outbox (0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF) {
    +++ description: Facilitates L2 to L1 contract calls: Messages initiated from L2 (for example withdrawal messages) eventually resolve in execution on L1.
      sinceBlock:
+        19898364
    }
```

```diff
    contract OneStepProverMemory (0x1cD76B9C33b2e3b04D7B181399d492B3e49AD7fB) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
      sinceBlock:
+        20569168
    }
```

```diff
    contract ValidatorUtils (0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF) {
    +++ description: This contract implements view only utilities for validators.
      sinceBlock:
+        18736154
    }
```

```diff
    contract OneStepProver0 (0x2dCCAbE89cF76132619a9B18e9F9e48E837222b5) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
      sinceBlock:
+        20569167
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      sinceBlock:
+        16990669
    }
```

```diff
    contract ChallengeManager (0x68466622Aae5a9Ffd02530247d75Dd107f06B333) {
    +++ description: Contract that allows challenging state roots. Can be called through the RollupProxy by Validators or the UpgradeExecutor.
      sinceBlock:
+        19898364
    }
```

```diff
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42) {
    +++ description: Escrow contract for the project's gas token (can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for canonical bridge messaging.
      sinceBlock:
+        19898364
    }
```

```diff
    contract Inbox (0x7AD2a94BefF3294a31894cFb5ba4206957a53c19) {
    +++ description: Facilitates sending L1 to L2 messages like depositing ETH, but does not escrow funds.
      sinceBlock:
+        19898364
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: A sequencer (registered in this contract) can submit transaction batches or commitments here.
      sinceBlock:
+        19898364
    }
```

```diff
    contract OneStepProofEntry (0x8Faa21891B0b928afEbd5314D1D313f8f7B34DaC) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
      sinceBlock:
+        20569171
    }
```

```diff
    contract RollupEventInbox (0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A) {
    +++ description: Helper contract sending configuration data over the bridge during the systems initialization.
      sinceBlock:
+        19898364
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control permissions for upgrading the system contract implementations.
      sinceBlock:
+        19898364
    }
```

```diff
    contract ProxyAdmin (0xBbc3872E30C91ef69336937838c2a283F79f7E68) {
    +++ description: None
      sinceBlock:
+        19898364
    }
```

```diff
    contract OneStepProverMath (0xCf4b98cFF2976E4eb579B9498f398b5bd279A6eD) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
      sinceBlock:
+        20569169
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      sinceBlock:
+        19898364
    }
```

Generated with discovered.json: 0x71876173bf16b69ab343673e41833f65ba8224c9

# Diff at Thu, 27 Feb 2025 11:45:43 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@a4b50e45bb44f8ceeea29f9236088d26a843c885 block: 21723939
- current block number: 21723939

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21723939 (main branch discovery), not current.

```diff
    contract RollupEventInbox (0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A) {
    +++ description: Helper contract sending configuration data over the bridge during the systems initialization.
      name:
-        "ERC20RollupEventInbox"
+        "RollupEventInbox"
      displayName:
-        "RollupEventInbox"
    }
```

Generated with discovered.json: 0x0136c194a96315acbdf5c99885f1e1e15df32be9

# Diff at Fri, 21 Feb 2025 14:07:11 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@d219f271711b2cf7a164e3443bead5e4957d13a8 block: 21723939
- current block number: 21723939

## Description

Config related: Change some severities and add templates.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21723939 (main branch discovery), not current.

```diff
    contract Outbox (0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF) {
    +++ description: Facilitates L2 to L1 contract calls: Messages initiated from L2 (for example withdrawal messages) eventually resolve in execution on L1.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract ChallengeManager (0x68466622Aae5a9Ffd02530247d75Dd107f06B333) {
    +++ description: Contract that allows challenging state roots. Can be called through the RollupProxy by Validators or the UpgradeExecutor.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42) {
    +++ description: Escrow contract for the project's gas token (can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for canonical bridge messaging.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract Inbox (0x7AD2a94BefF3294a31894cFb5ba4206957a53c19) {
    +++ description: Facilitates sending L1 to L2 messages like depositing ETH, but does not escrow funds.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: A sequencer (registered in this contract) can submit transaction batches or commitments here.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control permissions for upgrading the system contract implementations.
      category:
+        {"name":"Governance","priority":3}
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

Generated with discovered.json: 0x09fe8f942437ca8fd5a4f5b6f4b3759959011048

# Diff at Tue, 04 Feb 2025 12:31:27 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@145553eed7ba44636411ecb25e4099728acd02f9 block: 21723939
- current block number: 21723939

## Description

Rename 'configure' permission to 'interact'

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21723939 (main branch discovery), not current.

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control permissions for upgrading the system contract implementations.
      directlyReceivedPermissions.1.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

Generated with discovered.json: 0x0735e9e048830ea9b9049848dd70c7bd85ec23ee

# Diff at Tue, 28 Jan 2025 15:33:18 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@b60bc0e936cb7b213e24f14ed69abaff22493651 block: 21637076
- current block number: 21723939

## Description

Standard upgrade to ArbOS v32 (known contracts).

## Watched changes

```diff
-   Status: DELETED
    contract OneStepProverHostIo (0x17e7F68ce50A77e55C7834ddF31AEf86403B8010)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.0.description:
-        "Pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
+        "Pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability, DACs and the fastConfirmer role, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
    }
```

```diff
-   Status: DELETED
    contract OneStepProofEntry (0x57EA090Ac0554d174AE0e2855B460e84A1A7C221)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
    contract ChallengeManager (0x68466622Aae5a9Ffd02530247d75Dd107f06B333) {
    +++ description: Contract that allows challenging state roots. Can be called through the RollupProxy by Validators or the UpgradeExecutor.
      sourceHashes.1:
-        "0x58a6261c83c2766f749641902ad6fdb695ea189d2747f073b57a8f35b9a547e5"
+        "0x1a095768302d7d1c3d02375eaa3341833b4f1aaac707e1c608bce478c87cbf27"
      values.$implementation:
-        "0x1D901DD7A5eFE421C3C437B147040E5AF22E6A43"
+        "0x02E05A9245C5853f895daDcc3A8216C953C8736B"
      values.$pastUpgrades.1:
+        ["2025-01-27T14:58:35.000Z","0xe11d3d807bd73ee2b941638788ccc55113045530f5b5fa5f2c7150ca54af8787",["0x02E05A9245C5853f895daDcc3A8216C953C8736B"]]
      values.$upgradeCount:
-        1
+        2
      values.osp:
-        "0x57EA090Ac0554d174AE0e2855B460e84A1A7C221"
+        "0x8Faa21891B0b928afEbd5314D1D313f8f7B34DaC"
    }
```

```diff
-   Status: DELETED
    contract OneStepProver0 (0x72B166070781a552D7b95a907eF59ca05d3D5a62)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
-   Status: DELETED
    contract OneStepProverMemory (0x8b73Ef238ADaB31EBC7c05423d243c345241a22f)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
-   Status: DELETED
    contract OneStepProverMath (0x90eC62De2EB7C7512a22bD2D55926AD6bA609F38)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control permissions for upgrading the system contract implementations.
      directlyReceivedPermissions.1.description:
-        "Pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
+        "Pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability, DACs and the fastConfirmer role, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      template:
-        "orbitstack/RollupProxy"
+        "orbitstack/RollupProxy_fastConfirm"
      sourceHashes.2:
-        "0xef94a66bd5339efd18fb9ca1f8031482e7ef7bbe6c5a0a10fae254ab83712406"
+        "0x7ee21b18b2e18c636bfafc08ff72692cc43302b2599ba75f0abad67282866dd5"
      sourceHashes.1:
-        "0x8b48118fe606012c0dcac2ccc1821785935aec89fab8f219f47b32c482b0017e"
+        "0x9349e73cbc2d2b818c1d79711574ba210b56249d8d3845bc78c776caf8f8ff42"
      issuedPermissions.0.description:
-        "Pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
+        "Pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability, DACs and the fastConfirmer role, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
      values.$implementation.1:
-        "0x660ea1675F7323dC3Ba0c8dDFB593225Eb01E3C1"
+        "0x5607Ea4b5F6e3F610bD346B36D3143FFf46d1C34"
      values.$implementation.0:
-        "0x0aE4dD666748bF0F6dB5c149Eab1D8aD27820A6A"
+        "0x9B56A789fEDD5df27dBaB53b085F7157397cA17D"
      values.$pastUpgrades.1:
+        ["2025-01-27T14:58:35.000Z","0xe11d3d807bd73ee2b941638788ccc55113045530f5b5fa5f2c7150ca54af8787",["0x9B56A789fEDD5df27dBaB53b085F7157397cA17D","0x5607Ea4b5F6e3F610bD346B36D3143FFf46d1C34"]]
      values.$upgradeCount:
-        1
+        2
+++ description: ArbOS version derived from known wasmModuleRoots.
      values.arbOsFromWmRoot:
-        "ArbOS v20 wasmModuleRoot"
+        "ArbOS v32 wasmModuleRoot"
+++ description: Root hash of the WASM module used for execution, like a fingerprint of the L2 logic. Can be associated with ArbOS versions.
      values.wasmModuleRoot:
-        "0x8b104a2e80ac6165dc58b9048de12f301d70b02a0ab51396c22b4b4b802a16a4"
+        "0x184884e1eb9fefdc158f6c8ac912bb183bf3cf83f0090317e0bc4ac5860baa39"
      values.anyTrustFastConfirmer:
+        "0x0000000000000000000000000000000000000000"
    }
```

```diff
+   Status: CREATED
    contract OneStepProverHostIo (0x0003A96B27ce73505b43ea1b71a5aB06bec568C4)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
+   Status: CREATED
    contract OneStepProverMemory (0x1cD76B9C33b2e3b04D7B181399d492B3e49AD7fB)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
+   Status: CREATED
    contract OneStepProver0 (0x2dCCAbE89cF76132619a9B18e9F9e48E837222b5)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
+   Status: CREATED
    contract OneStepProofEntry (0x8Faa21891B0b928afEbd5314D1D313f8f7B34DaC)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

```diff
+   Status: CREATED
    contract OneStepProverMath (0xCf4b98cFF2976E4eb579B9498f398b5bd279A6eD)
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
```

## Source code changes

```diff
.../ChallengeManager/ChallengeManager.sol          | 404 ++++++----
 .../OneStepProofEntry.sol                          | 485 +++++++++--
 .../{.flat@21637076 => .flat}/OneStepProver0.sol   | 765 +++++++++++++-----
 .../OneStepProverHostIo.sol                        | 892 +++++++++++++++++----
 .../OneStepProverMath.sol                          |  65 +-
 .../OneStepProverMemory.sol                        | 315 ++++++--
 .../RollupProxy/RollupAdminLogic.1.sol             | 370 ++++++---
 .../RollupProxy/RollupUserLogic.2.sol              | 415 ++++++----
 8 files changed, 2766 insertions(+), 945 deletions(-)
```

Generated with discovered.json: 0xbb93f087f7ff17c1a7f575aa48c70b1b62791129

# Diff at Mon, 20 Jan 2025 11:09:32 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@2c8b4f3d9910bb6371be9b4df87b70856e7d8c64 block: 21637076
- current block number: 21637076

## Description

Rerun on the same block number. Applies fixes to permissions and via field. Renames permission's target to to/from.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21637076 (main branch discovery), not current.

```diff
    contract Outbox (0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF) {
    +++ description: Facilitates L2 to L1 contract calls: Messages initiated from L2 (for example withdrawal messages) eventually resolve in execution on L1.
      issuedPermissions.0.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.1.delay:
-        0
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.8.target:
-        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      receivedPermissions.8.from:
+        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      receivedPermissions.7.target:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions.7.from:
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions.6.target:
-        "0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
      receivedPermissions.6.from:
+        "0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
      receivedPermissions.5.target:
-        "0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
      receivedPermissions.5.from:
+        "0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
      receivedPermissions.4.target:
-        "0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
      receivedPermissions.4.from:
+        "0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
      receivedPermissions.3.target:
-        "0x7983403dDA368AA7d67145a9b81c5c517F364c42"
      receivedPermissions.3.from:
+        "0x7983403dDA368AA7d67145a9b81c5c517F364c42"
      receivedPermissions.2.target:
-        "0x68466622Aae5a9Ffd02530247d75Dd107f06B333"
      receivedPermissions.2.from:
+        "0x68466622Aae5a9Ffd02530247d75Dd107f06B333"
      receivedPermissions.1.target:
-        "0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
      receivedPermissions.1.from:
+        "0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
      receivedPermissions.0.target:
-        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      receivedPermissions.0.from:
+        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      directlyReceivedPermissions.0.target:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      directlyReceivedPermissions.0.from:
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
    }
```

```diff
    contract ChallengeManager (0x68466622Aae5a9Ffd02530247d75Dd107f06B333) {
    +++ description: Contract that allows challenging state roots. Can be called through the RollupProxy by Validators or the UpgradeExecutor.
      issuedPermissions.0.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.1.delay:
-        0
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
    }
```

```diff
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42) {
    +++ description: Escrow contract for the project's gas token (can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for canonical bridge messaging.
      issuedPermissions.0.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.1.delay:
-        0
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
    }
```

```diff
    contract Inbox (0x7AD2a94BefF3294a31894cFb5ba4206957a53c19) {
    +++ description: Facilitates sending L1 to L2 messages like depositing ETH, but does not escrow funds.
      issuedPermissions.0.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.1.delay:
-        0
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: A sequencer (registered in this contract) can submit transaction batches or commitments here.
      issuedPermissions.1.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.1.via.1.delay:
-        0
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.target:
-        "0xBa369bd77a346babCd282cB1a015194E8ec54542"
      issuedPermissions.0.to:
+        "0xBa369bd77a346babCd282cB1a015194E8ec54542"
      issuedPermissions.0.description:
+        "Can submit transaction batches or commitments to the SequencerInbox contract on the host chain."
    }
```

```diff
    contract ERC20RollupEventInbox (0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A) {
    +++ description: Helper contract sending configuration data over the bridge during the systems initialization.
      issuedPermissions.0.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.1.delay:
-        0
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control permissions for upgrading the system contract implementations.
      issuedPermissions.0.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.1.delay:
-        0
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      directlyReceivedPermissions.2.target:
-        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      directlyReceivedPermissions.2.from:
+        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      directlyReceivedPermissions.1.target:
-        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      directlyReceivedPermissions.1.from:
+        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      directlyReceivedPermissions.0.target:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      directlyReceivedPermissions.0.from:
+        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
    }
```

```diff
    contract ProxyAdmin (0xBbc3872E30C91ef69336937838c2a283F79f7E68) {
    +++ description: None
      directlyReceivedPermissions.6.target:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      directlyReceivedPermissions.6.from:
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      directlyReceivedPermissions.5.target:
-        "0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
      directlyReceivedPermissions.5.from:
+        "0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
      directlyReceivedPermissions.4.target:
-        "0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
      directlyReceivedPermissions.4.from:
+        "0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
      directlyReceivedPermissions.3.target:
-        "0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
      directlyReceivedPermissions.3.from:
+        "0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
      directlyReceivedPermissions.2.target:
-        "0x7983403dDA368AA7d67145a9b81c5c517F364c42"
      directlyReceivedPermissions.2.from:
+        "0x7983403dDA368AA7d67145a9b81c5c517F364c42"
      directlyReceivedPermissions.1.target:
-        "0x68466622Aae5a9Ffd02530247d75Dd107f06B333"
      directlyReceivedPermissions.1.from:
+        "0x68466622Aae5a9Ffd02530247d75Dd107f06B333"
      directlyReceivedPermissions.0.target:
-        "0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
      directlyReceivedPermissions.0.from:
+        "0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      issuedPermissions.2.target:
-        "0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634"
      issuedPermissions.2.to:
+        "0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634"
      issuedPermissions.2.description:
+        "Can propose new state roots (called nodes) and challenge state roots on the host chain."
      issuedPermissions.1.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.via.0.description:
-        "Pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
      issuedPermissions.0.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.description:
+        "Pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
    }
```

Generated with discovered.json: 0xbf37d2a7d33f569e3a8a4e58ddbd635b615c46fb

# Diff at Thu, 16 Jan 2025 12:34:55 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@b471de2d691e0c6d99ad89859efde79edd3d4dfb block: 21465184
- current block number: 21637076

## Description

ConduitMultisig signer changes.

## Watched changes

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      values.$members.8:
+        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
      values.$members.7:
-        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
+        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
      values.$members.6:
-        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
+        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
      values.$members.5:
-        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
+        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
      values.$members.4:
-        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
+        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
      values.$members.3:
-        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
+        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
      values.$members.2:
-        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
+        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
      values.$members.1:
-        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
+        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
      values.$members.0:
-        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
+        "0x50930d652266EF4127FA3A1906B7Cb9951076628"
      values.multisigThreshold:
-        "4 of 8 (50%)"
+        "4 of 9 (44%)"
    }
```

Generated with discovered.json: 0x6f1b4e98d1911eca8d7477f3335828a9c19f8a69

# Diff at Wed, 08 Jan 2025 10:44:50 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@20bf0eaa1dce373e2c004314fef59d2d1bdf5502 block: 21465184
- current block number: 21465184

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21465184 (main branch discovery), not current.

```diff
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42) {
    +++ description: Escrow contract for the project's gas token (can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for canonical bridge messaging.
      description:
-        "Escrow contract for the project's gas token (Can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for canonical bridge messaging."
+        "Escrow contract for the project's gas token (can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for canonical bridge messaging."
    }
```

Generated with discovered.json: 0xc58cb7bb95fe9ace933ae03e05077f1ba5dd9aab

# Diff at Mon, 23 Dec 2024 12:28:38 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@18325a975c44684702f30ee366361589e4c2ed8c block: 21078650
- current block number: 21465184

## Description

Config related: Celestia-Nitro wmroot added.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21078650 (main branch discovery), not current.

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      usedTypes.0.arg.0xe81f986823a85105c5fd91bb53b4493d38c0c26652d23f76a7405ac889908287:
+        "Celestia Nitro 3.2.1 wasmModuleRoot"
    }
```

Generated with discovered.json: 0xac3443838edfc9519bbb4e06809c1b8cec767bca

# Diff at Fri, 06 Dec 2024 08:09:43 GMT:

- author: Piotr Szlachciak (<szlachciak.piotr@gmail.com>)
- comparing to: main@f9ded76f7930b0c86788e4c4595d553b165b87d1 block: 21078650
- current block number: 21078650

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21078650 (main branch discovery), not current.

```diff
    contract ValidatorUtils (0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF) {
    +++ description: This contract implements view only utilities for validators.
      template:
+        "orbitstack/ValidatorUtils"
      description:
+        "This contract implements view only utilities for validators."
    }
```

Generated with discovered.json: 0xfb6d2348fe16a6399c6c0259827abb8dd419b687

# Diff at Fri, 29 Nov 2024 11:28:40 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@9776abb8b1f960f6f1ec6ec27558b5eff7eb5b87 block: 21078650
- current block number: 21078650

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21078650 (main branch discovery), not current.

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.0.description:
-        "can pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
+        "Pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control permissions for upgrading the system contract implementations.
      directlyReceivedPermissions.1.description:
-        "can pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
+        "Pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      issuedPermissions.0.via.0.description:
-        "can pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
+        "Pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
      fieldMeta.minimumAssertionPeriod:
+        {"description":"Minimum time delta between newly created nodes (stateUpdates). This is checked on `stakeOnNewNode()`. Format is number of ETHEREUM blocks, even for L3s. "}
    }
```

Generated with discovered.json: 0x4c222a649814bb003ab0f6a6b8e3db10d0eb4775

# Diff at Fri, 15 Nov 2024 08:18:10 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@a00c2a67d12a174a45864b549412045028598606 block: 21078650
- current block number: 21078650

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21078650 (main branch discovery), not current.

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: A sequencer (registered in this contract) can submit transaction batches or commitments here.
      fieldMeta.maxTimeVariation.description:
-        "Settable by the Rollup Owner. Transactions can only be force-included after `delayBlocks` window (Sequencer-only) has passed."
+        "Settable by the Rollup Owner. Transactions can only be force-included after the `delayBlocks` window (Sequencer-only) has passed."
    }
```

```diff
    contract ERC20RollupEventInbox (0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A) {
    +++ description: Helper contract sending configuration data over the bridge during the systems initialization.
      template:
+        "orbitstack/RollupEventInbox"
      displayName:
+        "RollupEventInbox"
      description:
+        "Helper contract sending configuration data over the bridge during the systems initialization."
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control permissions for upgrading the system contract implementations.
      description:
-        "Central contract defining the access control for upgrading the system contract implementations."
+        "Central contract defining the access control permissions for upgrading the system contract implementations."
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      issuedPermissions.3:
-        {"permission":"upgrade","target":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96","delay":0}]}
      issuedPermissions.2.permission:
-        "propose"
+        "validate"
      issuedPermissions.1.permission:
-        "configure"
+        "upgrade"
      issuedPermissions.1.via.0.description:
-        "can pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
      issuedPermissions.0.permission:
-        "challenge"
+        "configure"
      issuedPermissions.0.target:
-        "0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634"
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.0:
+        {"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96","delay":0,"description":"can pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."}
    }
```

Generated with discovered.json: 0x9bedf1de828f7f2c999ee9490eb418249801fa5c

# Diff at Mon, 04 Nov 2024 07:56:17 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@950c85bf556f084c302d2b03100375cf3c7ed376 block: 21078650
- current block number: 21078650

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21078650 (main branch discovery), not current.

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.8:
+        {"permission":"upgrade","target":"0xf993AF239770932A0EDaB88B6A5ba3708Bd58239","via":[{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}]}
      receivedPermissions.7.target:
-        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions.7.via.1:
+        {"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}
      receivedPermissions.7.via.0.address:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
      receivedPermissions.6.target:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
      receivedPermissions.5.target:
-        "0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"
+        "0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
      receivedPermissions.4.target:
-        "0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"
+        "0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
      receivedPermissions.3.target:
-        "0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"
+        "0x7983403dDA368AA7d67145a9b81c5c517F364c42"
      receivedPermissions.2.target:
-        "0x7983403dDA368AA7d67145a9b81c5c517F364c42"
+        "0x68466622Aae5a9Ffd02530247d75Dd107f06B333"
      receivedPermissions.1.target:
-        "0x68466622Aae5a9Ffd02530247d75Dd107f06B333"
+        "0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
      receivedPermissions.0.permission:
-        "upgrade"
+        "configure"
      receivedPermissions.0.target:
-        "0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
+        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
      receivedPermissions.0.via.1:
-        {"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}
      receivedPermissions.0.via.0.address:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions.0.description:
+        "can pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: A sequencer (registered in this contract) can submit transaction batches or commitments here.
+++ description: Settable by the Rollup Owner. Transactions can only be force-included after `delayBlocks` window (Sequencer-only) has passed.
      values.maxTimeVariation:
-        [3456000,48,86400000,3600]
+        {"delayBlocks":3456000,"futureBlocks":48,"delaySeconds":86400000,"futureSeconds":3600}
      values.postsBlobs:
+        false
      fieldMeta.maxTimeVariation.description:
-        "Struct: delayBlocks, futureBlocks, delaySeconds, futureSeconds. onlyRollupOwner settable. Transactions can only be force-included after `delayBlocks` window (Sequencer-only) has passed."
+        "Settable by the Rollup Owner. Transactions can only be force-included after `delayBlocks` window (Sequencer-only) has passed."
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control for upgrading the system contract implementations.
      directlyReceivedPermissions.2:
+        {"permission":"upgrade","target":"0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"}
      directlyReceivedPermissions.1.permission:
-        "upgrade"
+        "configure"
      directlyReceivedPermissions.1.description:
+        "can pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      issuedPermissions.3:
+        {"permission":"upgrade","target":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96","delay":0}]}
      issuedPermissions.2.permission:
-        "upgrade"
+        "propose"
      issuedPermissions.2.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
+        "0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634"
      issuedPermissions.2.via.0:
-        {"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96","delay":0}
      issuedPermissions.1.permission:
-        "propose"
+        "configure"
      issuedPermissions.1.target:
-        "0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634"
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.1.via.0:
+        {"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96","delay":0,"description":"can pause and unpause and set important roles and parameters in the system contracts: Can delegate Sequencer management to a BatchPosterManager address, manage data availability and DACs, set the Sequencer-only window, introduce an allowList to the bridge and whitelist Inboxes/Outboxes."}
    }
```

Generated with discovered.json: 0x6f29a5a43a00a514f65afd3ea319cf3cd11f02aa

# Diff at Wed, 30 Oct 2024 13:07:34 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@0a8a53530022c6c5edd257c3682a3e7f80d0c550 block: 21069927
- current block number: 21078650

## Description

Conduit MS: Signer added.

## Watched changes

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      values.$members.7:
+        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
      values.$members.6:
-        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
+        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
      values.$members.5:
-        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
+        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
      values.$members.4:
-        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
+        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
      values.$members.3:
-        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
+        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
      values.$members.2:
-        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
+        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
      values.$members.1:
-        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
+        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
      values.$members.0:
-        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
+        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
      values.multisigThreshold:
-        "4 of 7 (57%)"
+        "4 of 8 (50%)"
    }
```

Generated with discovered.json: 0xeaf76760f442b7780399d1594e1ee8522052e8d0

# Diff at Tue, 29 Oct 2024 13:07:55 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@7b3fc9dc9074e1d423b48522c3f0273c86aab54a block: 21069927
- current block number: 21069927

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21069927 (main branch discovery), not current.

```diff
    contract Outbox (0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF) {
    +++ description: Facilitates L2 to L1 contract calls: Messages initiated from L2 (for example withdrawal messages) eventually resolve in execution on L1.
      description:
-        "Facilitates L2 to L1 contract calls: Messages initiated from L2 (for example withdrawal messages) which eventually resolve in execution on L1."
+        "Facilitates L2 to L1 contract calls: Messages initiated from L2 (for example withdrawal messages) eventually resolve in execution on L1."
    }
```

```diff
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42) {
    +++ description: Escrow contract for the project's gas token (Can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for canonical bridge messaging.
      description:
-        "Escrow contract for the project's gas token (Can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for bridge messaging."
+        "Escrow contract for the project's gas token (Can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for canonical bridge messaging."
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      fieldMeta.confirmPeriodBlocks.description:
-        "Challenge period. (Number of blocks until a node is confirmed)."
+        "Challenge period. (Number of ETHEREUM blocks until a node is confirmed, even for L3s)."
    }
```

Generated with discovered.json: 0xba3390a12a845daaf2e1e54c209d1391665bdb7c

# Diff at Tue, 29 Oct 2024 07:55:23 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@dd2750779d294ea31d352eac7a7f2e0e655f6440 block: 21029025
- current block number: 21069927

## Description

Provide description of changes. This section will be preserved.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21029025 (main branch discovery), not current.

```diff
    contract Outbox (0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF) {
    +++ description: Facilitates L2 to L1 contract calls: Messages initiated from L2 (for example withdrawal messages) which eventually resolve in execution on L1.
      issuedPermissions.0.target:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.1:
+        {"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","delay":0}
      issuedPermissions.0.via.0.address:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions:
+        [{"permission":"upgrade","target":"0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"},{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}]},{"permission":"upgrade","target":"0x68466622Aae5a9Ffd02530247d75Dd107f06B333","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"},{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}]},{"permission":"upgrade","target":"0x7983403dDA368AA7d67145a9b81c5c517F364c42","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"},{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}]},{"permission":"upgrade","target":"0x7AD2a94BefF3294a31894cFb5ba4206957a53c19","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"},{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}]},{"permission":"upgrade","target":"0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"},{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}]},{"permission":"upgrade","target":"0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"},{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}]},{"permission":"upgrade","target":"0xa5D23c69894241825dAffB570c3c742C0F52df96","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"},{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}]},{"permission":"upgrade","target":"0xf993AF239770932A0EDaB88B6A5ba3708Bd58239","via":[{"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}]}]
      directlyReceivedPermissions:
+        [{"permission":"act","target":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}]
    }
```

```diff
    contract ChallengeManager (0x68466622Aae5a9Ffd02530247d75Dd107f06B333) {
    +++ description: Contract that allows challenging state roots. Can be called through the RollupProxy by Validators or the UpgradeExecutor.
      issuedPermissions.0.target:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.1:
+        {"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","delay":0}
      issuedPermissions.0.via.0.address:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
    }
```

```diff
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42) {
    +++ description: Escrow contract for the project's gas token (Can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for bridge messaging.
      issuedPermissions.0.target:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.1:
+        {"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","delay":0}
      issuedPermissions.0.via.0.address:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
    }
```

```diff
    contract Inbox (0x7AD2a94BefF3294a31894cFb5ba4206957a53c19) {
    +++ description: Facilitates sending L1 to L2 messages like depositing ETH, but does not escrow funds.
      issuedPermissions.0.target:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.1:
+        {"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","delay":0}
      issuedPermissions.0.via.0.address:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: A sequencer (registered in this contract) can submit transaction batches or commitments here.
      issuedPermissions.1.target:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.1.via.1:
+        {"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","delay":0}
      issuedPermissions.1.via.0.address:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
    }
```

```diff
    contract ERC20RollupEventInbox (0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A) {
    +++ description: None
      issuedPermissions.0.target:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.1:
+        {"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","delay":0}
      issuedPermissions.0.via.0.address:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control for upgrading the system contract implementations.
      issuedPermissions.0.target:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.1:
+        {"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","delay":0}
      issuedPermissions.0.via.0.address:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      receivedPermissions:
-        [{"permission":"upgrade","target":"0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]},{"permission":"upgrade","target":"0x68466622Aae5a9Ffd02530247d75Dd107f06B333","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]},{"permission":"upgrade","target":"0x7983403dDA368AA7d67145a9b81c5c517F364c42","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]},{"permission":"upgrade","target":"0x7AD2a94BefF3294a31894cFb5ba4206957a53c19","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]},{"permission":"upgrade","target":"0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]},{"permission":"upgrade","target":"0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]},{"permission":"upgrade","target":"0xa5D23c69894241825dAffB570c3c742C0F52df96","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]},{"permission":"upgrade","target":"0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"}]
      directlyReceivedPermissions.1:
+        {"permission":"upgrade","target":"0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"}
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      issuedPermissions.2.target:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.2.via.0:
+        {"address":"0xa5D23c69894241825dAffB570c3c742C0F52df96","delay":0}
    }
```

Generated with discovered.json: 0x1a8670313b3d14fe75b32ec892197fd9fe85e6e0

# Diff at Mon, 28 Oct 2024 14:20:35 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@846d03afee15838cf7b18315c02ebdb6a2071f6c block: 21029025
- current block number: 21029025

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21029025 (main branch discovery), not current.

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control for upgrading the system contract implementations.
      values.executors:
+        ["0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"]
    }
```

Generated with discovered.json: 0x56536c1c0fdb00b919e70c9caae6c8b6629c46eb

# Diff at Wed, 23 Oct 2024 14:56:39 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@9cc37d16a5f0b172bb41f98d8a970963e5ca4afb block: 20842779
- current block number: 21029025

## Description

Switch to discoverydriven data.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20842779 (main branch discovery), not current.

```diff
    contract Outbox (0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF) {
    +++ description: Facilitates L2 to L1 contract calls: Messages initiated from L2 (for example withdrawal messages) which eventually resolve in execution on L1.
      issuedPermissions.0.target:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      issuedPermissions.0.via.0:
+        {"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","delay":0}
      template:
+        "orbitstack/Outbox"
      description:
+        "Facilitates L2 to L1 contract calls: Messages initiated from L2 (for example withdrawal messages) which eventually resolve in execution on L1."
    }
```

```diff
    contract OneStepProverHostIo (0x17e7F68ce50A77e55C7834ddF31AEf86403B8010) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
      template:
+        "orbitstack/OneStepProverHostIo"
      description:
+        "One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine."
    }
```

```diff
-   Status: DELETED
    contract  (0x27C7Bfd2cC11429e9b80c443b42FDBe4754F6c91)
    +++ description: None
```

```diff
    contract OneStepProofEntry (0x57EA090Ac0554d174AE0e2855B460e84A1A7C221) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
      template:
+        "orbitstack/OneStepProofEntry"
      description:
+        "One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine."
    }
```

```diff
    contract ChallengeManager (0x68466622Aae5a9Ffd02530247d75Dd107f06B333) {
    +++ description: Contract that allows challenging state roots. Can be called through the RollupProxy by Validators or the UpgradeExecutor.
      issuedPermissions.0.target:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      issuedPermissions.0.via.0:
+        {"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","delay":0}
      template:
+        "orbitstack/ChallengeManager"
      description:
+        "Contract that allows challenging state roots. Can be called through the RollupProxy by Validators or the UpgradeExecutor."
    }
```

```diff
    contract OneStepProver0 (0x72B166070781a552D7b95a907eF59ca05d3D5a62) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
      template:
+        "orbitstack/OneStepProver0"
      description:
+        "One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine."
    }
```

```diff
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42) {
    +++ description: Escrow contract for the project's gas token (Can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for bridge messaging.
      issuedPermissions.0.target:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      issuedPermissions.0.via.0:
+        {"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","delay":0}
      template:
+        "orbitstack/Bridge"
      description:
+        "Escrow contract for the project's gas token (Can be different from ETH). Keeps a list of allowed Inboxes and Outboxes for bridge messaging."
    }
```

```diff
    contract Inbox (0x7AD2a94BefF3294a31894cFb5ba4206957a53c19) {
    +++ description: Facilitates sending L1 to L2 messages like depositing ETH, but does not escrow funds.
      issuedPermissions.0.target:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      issuedPermissions.0.via.0:
+        {"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","delay":0}
      template:
+        "orbitstack/Inbox"
      description:
+        "Facilitates sending L1 to L2 messages like depositing ETH, but does not escrow funds."
    }
```

```diff
-   Status: DELETED
    contract  (0x7Deda2425eC2d4EA0DF689A78de2fBF002075576)
    +++ description: None
```

```diff
    contract OneStepProverMemory (0x8b73Ef238ADaB31EBC7c05423d243c345241a22f) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
      template:
+        "orbitstack/OneStepProverMemory"
      description:
+        "One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine."
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: A sequencer (registered in this contract) can submit transaction batches or commitments here.
      issuedPermissions.1.target:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      issuedPermissions.1.via.0:
+        {"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","delay":0}
      values.IS_HARDCODED_SEQUENCER_BATCH_POSTER:
-        false
      template:
+        "orbitstack/SequencerInbox"
      description:
+        "A sequencer (registered in this contract) can submit transaction batches or commitments here."
      fieldMeta:
+        {"maxTimeVariation":{"description":"Struct: delayBlocks, futureBlocks, delaySeconds, futureSeconds. onlyRollupOwner settable. Transactions can only be force-included after `delayBlocks` window (Sequencer-only) has passed."}}
    }
```

```diff
    contract OneStepProverMath (0x90eC62De2EB7C7512a22bD2D55926AD6bA609F38) {
    +++ description: One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine.
      template:
+        "orbitstack/OneStepProverMath"
      description:
+        "One of the modular contracts used for the last step of a fraud proof, which is simulated inside a WASM virtual machine."
    }
```

```diff
-   Status: DELETED
    contract G (0x9C7BEBa8F6eF6643aBd725e45a4E8387eF260649)
    +++ description: None
```

```diff
-   Status: DELETED
    contract ValidatorWalletCreator (0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
    +++ description: None
```

```diff
    contract ERC20RollupEventInbox (0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A) {
    +++ description: None
      issuedPermissions.0.target:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      issuedPermissions.0.via.0:
+        {"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","delay":0}
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: Central contract defining the access control for upgrading the system contract implementations.
      issuedPermissions.0.target:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
      issuedPermissions.0.via.0:
+        {"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","delay":0}
      receivedPermissions.7:
+        {"permission":"upgrade","target":"0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"}
      receivedPermissions.6:
+        {"permission":"upgrade","target":"0xa5D23c69894241825dAffB570c3c742C0F52df96","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]}
      receivedPermissions.5:
+        {"permission":"upgrade","target":"0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]}
      receivedPermissions.4:
+        {"permission":"upgrade","target":"0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]}
      receivedPermissions.3:
+        {"permission":"upgrade","target":"0x7AD2a94BefF3294a31894cFb5ba4206957a53c19","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]}
      receivedPermissions.2:
+        {"permission":"upgrade","target":"0x7983403dDA368AA7d67145a9b81c5c517F364c42","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]}
      receivedPermissions.1:
+        {"permission":"upgrade","target":"0x68466622Aae5a9Ffd02530247d75Dd107f06B333","via":[{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]}
      receivedPermissions.0.target:
-        "0xf993AF239770932A0EDaB88B6A5ba3708Bd58239"
+        "0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"
      receivedPermissions.0.via:
+        [{"address":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]
      template:
+        "orbitstack/UpgradeExecutor"
      description:
+        "Central contract defining the access control for upgrading the system contract implementations."
      directlyReceivedPermissions:
+        [{"permission":"act","target":"0xBbc3872E30C91ef69336937838c2a283F79f7E68"}]
    }
```

```diff
    contract ProxyAdmin (0xBbc3872E30C91ef69336937838c2a283F79f7E68) {
    +++ description: None
      receivedPermissions:
-        [{"permission":"upgrade","target":"0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"},{"permission":"upgrade","target":"0x68466622Aae5a9Ffd02530247d75Dd107f06B333"},{"permission":"upgrade","target":"0x7983403dDA368AA7d67145a9b81c5c517F364c42"},{"permission":"upgrade","target":"0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"},{"permission":"upgrade","target":"0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"},{"permission":"upgrade","target":"0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"},{"permission":"upgrade","target":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}]
      template:
+        "global/ProxyAdmin"
      directlyReceivedPermissions:
+        [{"permission":"upgrade","target":"0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF"},{"permission":"upgrade","target":"0x68466622Aae5a9Ffd02530247d75Dd107f06B333"},{"permission":"upgrade","target":"0x7983403dDA368AA7d67145a9b81c5c517F364c42"},{"permission":"upgrade","target":"0x7AD2a94BefF3294a31894cFb5ba4206957a53c19"},{"permission":"upgrade","target":"0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3"},{"permission":"upgrade","target":"0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A"},{"permission":"upgrade","target":"0xa5D23c69894241825dAffB570c3c742C0F52df96"}]
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators).
      description:
-        "Manages rollup components, list of Stakers and Validators. Entry point for Validators creating new Rollup Nodes (state commits) and Challengers submitting fraud proofs."
+        "Central contract for the project's configuration like its execution logic hash (`wasmModuleRoot`) and addresses of the other system contracts. Entry point for Proposers creating new Rollup Nodes (state commitments) and Challengers submitting fraud proofs (In the Orbit stack, these two roles are both held by the Validators)."
      issuedPermissions.2:
+        {"permission":"upgrade","target":"0xa5D23c69894241825dAffB570c3c742C0F52df96","via":[]}
      issuedPermissions.1.permission:
-        "validate"
+        "propose"
      issuedPermissions.0.permission:
-        "upgrade"
+        "challenge"
      issuedPermissions.0.target:
-        "0xa5D23c69894241825dAffB570c3c742C0F52df96"
+        "0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634"
+++ description: Root hash of the WASM module used for execution, like a fingerprint of the L2 logic. Can be associated with ArbOS versions.
      values.wasmModuleRoot:
-        "ArbOS v20 wasmModuleRoot"
+        "0x8b104a2e80ac6165dc58b9048de12f301d70b02a0ab51396c22b4b4b802a16a4"
+++ description: ArbOS version derived from known wasmModuleRoots.
      values.arbOsFromWmRoot:
+        "ArbOS v20 wasmModuleRoot"
      fieldMeta.arbOsFromWmRoot:
+        {"description":"ArbOS version derived from known wasmModuleRoots."}
      fieldMeta.setValidatorCount:
+        {"description":"Increments on each Validator change."}
      fieldMeta.challenges:
+        {"description":"Emitted on createChallenge() in RollupUserLogic."}
    }
```

Generated with discovered.json: 0xee1204379eadcf548411e4209a09f9e75812b1ce

# Diff at Mon, 21 Oct 2024 12:44:32 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e660599f23a07618fe949a07be1f516ce44f1914 block: 20842779
- current block number: 20842779

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20842779 (main branch discovery), not current.

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Manages rollup components, list of Stakers and Validators. Entry point for Validators creating new Rollup Nodes (state commits) and Challengers submitting fraud proofs.
      descriptions:
-        ["Manages rollup components, list of Stakers and Validators. Entry point for Validators creating new Rollup Nodes (state commits) and Challengers submitting fraud proofs."]
      description:
+        "Manages rollup components, list of Stakers and Validators. Entry point for Validators creating new Rollup Nodes (state commits) and Challengers submitting fraud proofs."
    }
```

Generated with discovered.json: 0x21c0dc3aadb54546338c2b91d148ee5cc681017c

# Diff at Mon, 21 Oct 2024 11:06:14 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@8895d33866f5665c4c710f4ddaa32bfa63cc3c78 block: 20842779
- current block number: 20842779

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20842779 (main branch discovery), not current.

```diff
    contract Outbox (0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF) {
    +++ description: None
      values.$pastUpgrades.0.2:
+        ["0x19431dc37098877486532250FB3158140717C00C"]
      values.$pastUpgrades.0.1:
-        ["0x19431dc37098877486532250FB3158140717C00C"]
+        "0x8cc45e895fa944fdd15443047c58bd3633eb5cf885d54d46d081010615022312"
    }
```

```diff
    contract ChallengeManager (0x68466622Aae5a9Ffd02530247d75Dd107f06B333) {
    +++ description: None
      values.$pastUpgrades.0.2:
+        ["0x1D901DD7A5eFE421C3C437B147040E5AF22E6A43"]
      values.$pastUpgrades.0.1:
-        ["0x1D901DD7A5eFE421C3C437B147040E5AF22E6A43"]
+        "0x8cc45e895fa944fdd15443047c58bd3633eb5cf885d54d46d081010615022312"
    }
```

```diff
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42) {
    +++ description: None
      values.$pastUpgrades.0.2:
+        ["0x7EfcB76D0e2E776A298aAa603d433336e5F8b6ab"]
      values.$pastUpgrades.0.1:
-        ["0x7EfcB76D0e2E776A298aAa603d433336e5F8b6ab"]
+        "0x8cc45e895fa944fdd15443047c58bd3633eb5cf885d54d46d081010615022312"
    }
```

```diff
    contract Inbox (0x7AD2a94BefF3294a31894cFb5ba4206957a53c19) {
    +++ description: None
      values.$pastUpgrades.0.2:
+        ["0x31fAAAB44e74eB408d1FC69A14806B4b9cA09da2"]
      values.$pastUpgrades.0.1:
-        ["0x31fAAAB44e74eB408d1FC69A14806B4b9cA09da2"]
+        "0x8cc45e895fa944fdd15443047c58bd3633eb5cf885d54d46d081010615022312"
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: None
      values.$pastUpgrades.0.2:
+        ["0x383f16fB2809a56fC639c1eE2c93Ad2aa7Ee130A"]
      values.$pastUpgrades.0.1:
-        ["0x383f16fB2809a56fC639c1eE2c93Ad2aa7Ee130A"]
+        "0x8cc45e895fa944fdd15443047c58bd3633eb5cf885d54d46d081010615022312"
    }
```

```diff
    contract ERC20RollupEventInbox (0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A) {
    +++ description: None
      values.$pastUpgrades.0.2:
+        ["0x302275067251F5FcdB9359Bda735fD8f7A4A54c0"]
      values.$pastUpgrades.0.1:
-        ["0x302275067251F5FcdB9359Bda735fD8f7A4A54c0"]
+        "0x8cc45e895fa944fdd15443047c58bd3633eb5cf885d54d46d081010615022312"
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: None
      values.$pastUpgrades.0.2:
+        ["0x6c21303F5986180B1394d2C89f3e883890E2867b"]
      values.$pastUpgrades.0.1:
-        ["0x6c21303F5986180B1394d2C89f3e883890E2867b"]
+        "0x8cc45e895fa944fdd15443047c58bd3633eb5cf885d54d46d081010615022312"
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Manages rollup components, list of Stakers and Validators. Entry point for Validators creating new Rollup Nodes (state commits) and Challengers submitting fraud proofs.
      values.$pastUpgrades.0.2:
+        ["0x0aE4dD666748bF0F6dB5c149Eab1D8aD27820A6A","0x660ea1675F7323dC3Ba0c8dDFB593225Eb01E3C1"]
      values.$pastUpgrades.0.1:
-        ["0x0aE4dD666748bF0F6dB5c149Eab1D8aD27820A6A","0x660ea1675F7323dC3Ba0c8dDFB593225Eb01E3C1"]
+        "0x8cc45e895fa944fdd15443047c58bd3633eb5cf885d54d46d081010615022312"
    }
```

Generated with discovered.json: 0x2d0025dbb7faf770da08dbcca45812f85663c4c4

# Diff at Wed, 16 Oct 2024 11:36:25 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@a3d139b799cc0b28e5e912febb17464d4e5aef5d block: 20842779
- current block number: 20842779

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20842779 (main branch discovery), not current.

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: None
      issuedPermissions.1:
+        {"permission":"upgrade","target":"0xBbc3872E30C91ef69336937838c2a283F79f7E68","via":[]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "sequence"
      issuedPermissions.0.target:
-        "0xBbc3872E30C91ef69336937838c2a283F79f7E68"
+        "0xBa369bd77a346babCd282cB1a015194E8ec54542"
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Manages rollup components, list of Stakers and Validators. Entry point for Validators creating new Rollup Nodes (state commits) and Challengers submitting fraud proofs.
      issuedPermissions.1:
+        {"permission":"validate","target":"0x18c87d3DbF779E3F7793fc6c62ead9Ff15F0e634","via":[]}
    }
```

Generated with discovered.json: 0x68938ad30bfd946293ef04d7ddbd08dbdbbd4296

# Diff at Mon, 14 Oct 2024 10:51:20 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1afc77ff111ceb0970e7d09efcc7b2f376b0c281 block: 20842779
- current block number: 20842779

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20842779 (main branch discovery), not current.

```diff
    contract Outbox (0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF) {
    +++ description: None
      sourceHashes:
+        ["0xa7e3f6c355703ed46fcb2156862c4f01792b87beb10a87a81ce3bd5beee79b67","0x3073f29910dee50069a001fb20e58cca3dcc1b3c8da4b91809af2dd356ef0c8c"]
    }
```

```diff
    contract OneStepProverHostIo (0x17e7F68ce50A77e55C7834ddF31AEf86403B8010) {
    +++ description: None
      sourceHashes:
+        ["0x5b0a5e16100b7e163dcf39dc6a9034f12a7bad7a475cdffc73054b937be0683d"]
    }
```

```diff
    contract ValidatorUtils (0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF) {
    +++ description: None
      sourceHashes:
+        ["0xd9b36ec321be937cc727b5bdb0afa0e1a0a28448ef1a202d4f181a01ce57bdc8"]
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      sourceHashes:
+        ["0x81a7349eebb98ac33b0bc6842e3cb258034a8f2a4ba004570bb8e2e25947f9ff","0xd42bbf9f7dcd3720a7fc6bdc6edfdfae8800a37d6dd4decfa0ef6ca4a2e88940"]
    }
```

```diff
    contract OneStepProofEntry (0x57EA090Ac0554d174AE0e2855B460e84A1A7C221) {
    +++ description: None
      sourceHashes:
+        ["0xf3479c667d20b1c17ea2573dc7fe09e4315a3e20bc09d31bc92603520cc962cc"]
    }
```

```diff
    contract ChallengeManager (0x68466622Aae5a9Ffd02530247d75Dd107f06B333) {
    +++ description: None
      sourceHashes:
+        ["0xa7e3f6c355703ed46fcb2156862c4f01792b87beb10a87a81ce3bd5beee79b67","0x58a6261c83c2766f749641902ad6fdb695ea189d2747f073b57a8f35b9a547e5"]
    }
```

```diff
    contract OneStepProver0 (0x72B166070781a552D7b95a907eF59ca05d3D5a62) {
    +++ description: None
      sourceHashes:
+        ["0x20330713abbbcf0219ef7d1c0aa3a6ede1b421f14c9d21b25c973e54fb75f5df"]
    }
```

```diff
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42) {
    +++ description: None
      sourceHashes:
+        ["0xa7e3f6c355703ed46fcb2156862c4f01792b87beb10a87a81ce3bd5beee79b67","0x057de68a7007d55f4394ba6eafb2c802efcaf13583ff9342ea4d0ee3924d9be1"]
    }
```

```diff
    contract Inbox (0x7AD2a94BefF3294a31894cFb5ba4206957a53c19) {
    +++ description: None
      sourceHashes:
+        ["0xa7e3f6c355703ed46fcb2156862c4f01792b87beb10a87a81ce3bd5beee79b67","0xcb390b491549387c8fcc09fb22fbea7adf54cc74b7247a0c738369ddd7049b92"]
    }
```

```diff
    contract OneStepProverMemory (0x8b73Ef238ADaB31EBC7c05423d243c345241a22f) {
    +++ description: None
      sourceHashes:
+        ["0x731b4466319a83c95ce227d1a6c85aa03864f5d2bed03bda186843033a8b8d61"]
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: None
      sourceHashes:
+        ["0xa7e3f6c355703ed46fcb2156862c4f01792b87beb10a87a81ce3bd5beee79b67","0x50cf57b01499408fa99da27cf0fee96ec30f0d40667d1aa090c442bc80f0636b"]
    }
```

```diff
    contract OneStepProverMath (0x90eC62De2EB7C7512a22bD2D55926AD6bA609F38) {
    +++ description: None
      sourceHashes:
+        ["0xb2555ede3dfe7d6df28bd96d12a0113b658c213c7ce4e34fa539df7497bc51a1"]
    }
```

```diff
    contract G (0x9C7BEBa8F6eF6643aBd725e45a4E8387eF260649) {
    +++ description: None
      sourceHashes:
+        ["0xe932ea30bb6e0cb8004b6da6eda7aeb5354b73086f7e6c2c5b625a7f897b47da"]
    }
```

```diff
    contract ValidatorWalletCreator (0x9CAd81628aB7D8e239F1A5B497313341578c5F71) {
    +++ description: None
      sourceHashes:
+        ["0x4ef3473c840bed3b4c6258271a494794c1545f0d0f13c6a386d1e39e6180d67c"]
    }
```

```diff
    contract ERC20RollupEventInbox (0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A) {
    +++ description: None
      sourceHashes:
+        ["0xa7e3f6c355703ed46fcb2156862c4f01792b87beb10a87a81ce3bd5beee79b67","0x88c3a2fa81cad2f98a156402c78de0fc804b2a1866ea4f449aa90ae92ceabc6c"]
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: None
      sourceHashes:
+        ["0xa7e3f6c355703ed46fcb2156862c4f01792b87beb10a87a81ce3bd5beee79b67","0xa7ff878cfd433a428d567d3b90fe1df400a048a1af5298f22cd4cd4fc25bdecd"]
    }
```

```diff
    contract ProxyAdmin (0xBbc3872E30C91ef69336937838c2a283F79f7E68) {
    +++ description: None
      sourceHashes:
+        ["0xf944f88083f41ff959fefbdcd6fc3ae633692b072b8497fb14cbdd843eded490"]
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Manages rollup components, list of Stakers and Validators. Entry point for Validators creating new Rollup Nodes (state commits) and Challengers submitting fraud proofs.
      sourceHashes:
+        ["0xb8da0b3748daac768860783e8555198fd2d1bbdffb775b81557a7124890c7eca","0x8b48118fe606012c0dcac2ccc1821785935aec89fab8f219f47b32c482b0017e","0xef94a66bd5339efd18fb9ca1f8031482e7ef7bbe6c5a0a10fae254ab83712406"]
    }
```

Generated with discovered.json: 0x3042310ab0a196dad762d4fd834ab7c93a2e218c

# Diff at Tue, 01 Oct 2024 10:51:14 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bd754dc73c66120164006054f8d25c5fae9cd910 block: 20842779
- current block number: 20842779

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20842779 (main branch discovery), not current.

```diff
    contract Outbox (0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-05-18T17:37:23.000Z",["0x19431dc37098877486532250FB3158140717C00C"]]]
    }
```

```diff
    contract ChallengeManager (0x68466622Aae5a9Ffd02530247d75Dd107f06B333) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-05-18T17:37:23.000Z",["0x1D901DD7A5eFE421C3C437B147040E5AF22E6A43"]]]
    }
```

```diff
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-05-18T17:37:23.000Z",["0x7EfcB76D0e2E776A298aAa603d433336e5F8b6ab"]]]
    }
```

```diff
    contract Inbox (0x7AD2a94BefF3294a31894cFb5ba4206957a53c19) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-05-18T17:37:23.000Z",["0x31fAAAB44e74eB408d1FC69A14806B4b9cA09da2"]]]
    }
```

```diff
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-05-18T17:37:23.000Z",["0x383f16fB2809a56fC639c1eE2c93Ad2aa7Ee130A"]]]
    }
```

```diff
    contract ERC20RollupEventInbox (0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-05-18T17:37:23.000Z",["0x302275067251F5FcdB9359Bda735fD8f7A4A54c0"]]]
    }
```

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-05-18T17:37:23.000Z",["0x6c21303F5986180B1394d2C89f3e883890E2867b"]]]
    }
```

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Manages rollup components, list of Stakers and Validators. Entry point for Validators creating new Rollup Nodes (state commits) and Challengers submitting fraud proofs.
      values.$pastUpgrades:
+        [["2024-05-18T17:37:23.000Z",["0x0aE4dD666748bF0F6dB5c149Eab1D8aD27820A6A","0x660ea1675F7323dC3Ba0c8dDFB593225Eb01E3C1"]]]
      values.$upgradeCount:
+        1
    }
```

Generated with discovered.json: 0xa78d6a81ca1b26359417e447e15521d8fa4e63bc

# Diff at Fri, 27 Sep 2024 15:13:42 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@4cb14cc1bdc343d171a7988f9f91f11edbf568a8 block: 20625620
- current block number: 20842779

## Description

Config.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20625620 (main branch discovery), not current.

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Manages rollup components, list of Stakers and Validators. Entry point for Validators creating new Rollup Nodes (state commits) and Challengers submitting fraud proofs.
      usedTypes.0.arg.0x184884e1eb9fefdc158f6c8ac912bb183bf3cf83f0090317e0bc4ac5860baa39:
+        "ArbOS v32 wasmModuleRoot"
    }
```

Generated with discovered.json: 0x3564b4250a451b06b90adb9970217b583fc34d5a

# Diff at Sun, 01 Sep 2024 08:45:09 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@bee35b6cff7c52634ae8667cbb331e18ad4ec17a block: 20625620
- current block number: 20625620

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20625620 (main branch discovery), not current.

```diff
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239) {
    +++ description: Manages rollup components, list of Stakers and Validators. Entry point for Validators creating new Rollup Nodes (state commits) and Challengers submitting fraud proofs.
+++ description: Root hash of the WASM module used for execution, like a fingerprint of the L2 logic. Can be associated with ArbOS versions.
      values.wasmModuleRoot:
-        "0x8b104a2e80ac6165dc58b9048de12f301d70b02a0ab51396c22b4b4b802a16a4"
+        "ArbOS v20 wasmModuleRoot"
      usedTypes:
+        [{"typeCaster":"Mapping","arg":{"0xbb9d58e9527566138b682f3a207c0976d5359837f6e330f4017434cca983ff41":"ArbOS v1-rc1 wasmModuleRoot","0x9d68e40c47e3b87a8a7e6368cc52915720a6484bb2f47ceabad7e573e3a11232":"ArbOS v2.1 wasmModuleRoot","0x53c288a0ca7100c0f2db8ab19508763a51c7fd1be125d376d940a65378acaee7":"ArbOS v3 wasmModuleRoot","0x588762be2f364be15d323df2aa60ffff60f2b14103b34823b6f7319acd1ae7a3":"ArbOS v3.1 wasmModuleRoot","0xcfba6a883c50a1b4475ab909600fa88fc9cceed9e3ff6f43dccd2d27f6bd57cf":"ArbOS v3.2 wasmModuleRoot","0xa24ccdb052d92c5847e8ea3ce722442358db4b00985a9ee737c4e601b6ed9876":"ArbOS v4 wasmModuleRoot","0x1e09e6d9e35b93f33ed22b2bc8dc10bbcf63fdde5e8a1fb8cc1bcd1a52f14bd0":"ArbOS v5 wasmModuleRoot","0x3848eff5e0356faf1fc9cafecb789584c5e7f4f8f817694d842ada96613d8bab":"ArbOS v6 wasmModuleRoot","0x53dd4b9a3d807a8cbb4d58fbfc6a0857c3846d46956848cae0a1cc7eca2bb5a8":"ArbOS v7 wasmModuleRoot","0x2b20e1490d1b06299b222f3239b0ae07e750d8f3b4dedd19f500a815c1548bbc":"ArbOS v7.1 wasmModuleRoot","0xd1842bfbe047322b3f3b3635b5fe62eb611557784d17ac1d2b1ce9c170af6544":"ArbOS v9 wasmModuleRoot","0x6b94a7fc388fd8ef3def759297828dc311761e88d8179c7ee8d3887dc554f3c3":"ArbOS v10 wasmModuleRoot","0xda4e3ad5e7feacb817c21c8d0220da7650fe9051ece68a3f0b1c5d38bbb27b21":"ArbOS v10.1 wasmModuleRoot","0x0754e09320c381566cc0449904c377a52bd34a6b9404432e80afd573b67f7b17":"ArbOS v10.2 wasmModuleRoot","0xf559b6d4fa869472dabce70fe1c15221bdda837533dfd891916836975b434dec":"ArbOS v10.3 wasmModuleRoot","0xf4389b835497a910d7ba3ebfb77aa93da985634f3c052de1290360635be40c4a":"ArbOS v11 wasmModuleRoot","0x68e4fe5023f792d4ef584796c84d710303a5e12ea02d6e37e2b5e9c4332507c4":"ArbOS v11.1 wasmModuleRoot","0x8b104a2e80ac6165dc58b9048de12f301d70b02a0ab51396c22b4b4b802a16a4":"ArbOS v20 wasmModuleRoot","0xb0de9cb89e4d944ae6023a3b62276e54804c242fd8c4c2d8e6cc4450f5fa8b1b":"ArbOS v30 wasmModuleRoot","0x260f5fa5c3176a856893642e149cf128b5a8de9f828afec8d11184415dd8dc69":"ArbOS v31 wasmModuleRoot"}}]
    }
```

Generated with discovered.json: 0x82bc8471f41c6240516a31b5529eef006d79dbc6

# Diff at Fri, 30 Aug 2024 07:52:56 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@6c1bd1f41fadf5f2cb1c1805b5a2c6138a3ed35a block: 20625620
- current block number: 20625620

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20625620 (main branch discovery), not current.

```diff
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96) {
    +++ description: None
      receivedPermissions.0.via:
-        []
    }
```

```diff
    contract ProxyAdmin (0xBbc3872E30C91ef69336937838c2a283F79f7E68) {
    +++ description: None
      receivedPermissions.6.via:
-        []
      receivedPermissions.5.via:
-        []
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

Generated with discovered.json: 0xc7acb2befe9083dfedc5577e5e02e82195d49d0a

# Diff at Wed, 28 Aug 2024 07:33:59 GMT:

- author: Radina Talanova (<nt.radina@gmail.com>)
- current block number: 20625620

## Description

Provide description of changes. This section will be preserved.

## Initial discovery

```diff
+   Status: CREATED
    contract Outbox (0x1153a1e4B1523DFf36f77d696bd6eBF2B0e7DAbF)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OneStepProverHostIo (0x17e7F68ce50A77e55C7834ddF31AEf86403B8010)
    +++ description: None
```

```diff
+   Status: CREATED
    contract  (0x27C7Bfd2cC11429e9b80c443b42FDBe4754F6c91)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ValidatorUtils (0x2b0E04Dc90e3fA58165CB41E2834B44A56E766aF)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OneStepProofEntry (0x57EA090Ac0554d174AE0e2855B460e84A1A7C221)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ChallengeManager (0x68466622Aae5a9Ffd02530247d75Dd107f06B333)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OneStepProver0 (0x72B166070781a552D7b95a907eF59ca05d3D5a62)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Bridge (0x7983403dDA368AA7d67145a9b81c5c517F364c42)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Inbox (0x7AD2a94BefF3294a31894cFb5ba4206957a53c19)
    +++ description: None
```

```diff
+   Status: CREATED
    contract  (0x7Deda2425eC2d4EA0DF689A78de2fBF002075576)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OneStepProverMemory (0x8b73Ef238ADaB31EBC7c05423d243c345241a22f)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SequencerInbox (0x8D99372612e8cFE7163B1a453831Bc40eAeb3cF3)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OneStepProverMath (0x90eC62De2EB7C7512a22bD2D55926AD6bA609F38)
    +++ description: None
```

```diff
+   Status: CREATED
    contract G (0x9C7BEBa8F6eF6643aBd725e45a4E8387eF260649)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ValidatorWalletCreator (0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ERC20RollupEventInbox (0xa24eDA32bb36171a6c34CBB4B56f89FF7B8fD49A)
    +++ description: None
```

```diff
+   Status: CREATED
    contract UpgradeExecutor (0xa5D23c69894241825dAffB570c3c742C0F52df96)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0xBbc3872E30C91ef69336937838c2a283F79f7E68)
    +++ description: None
```

```diff
+   Status: CREATED
    contract RollupProxy (0xf993AF239770932A0EDaB88B6A5ba3708Bd58239)
    +++ description: Manages rollup components, list of Stakers and Validators. Entry point for Validators creating new Rollup Nodes (state commits) and Challengers submitting fraud proofs.
```

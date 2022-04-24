# Crescent types

Typescript Protobuf Messages for Crescent

## Usage

```sh
npm i crescent-types
```

```js
import { MsgClaim } from 'crescent-types/crescent/claim/v1beta1/tx';
import { ConditionType } from 'crescent-types/crescent/claim/v1beta1/claim';

MsgClaim.fromPartial({
  airdropId: Long.fromInt(1),
  recipient: "cosmos1y54exmx84cqtasvjnskf9fpx9c0rk9tk8fv4",
  conditionType: ConditionType.CONDITION_TYPE_VOTE
});

```


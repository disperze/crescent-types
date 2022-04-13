import { MsgClaim } from '../src/proto/crescent/claim/v1beta1/tx';
import { ConditionType } from '../src/proto/crescent/claim/v1beta1/claim';
import Long from 'long';

it('fromPartial', async () => {
  expect(
    MsgClaim.fromPartial({
      airdropId: Long.fromInt(1),
      recipient: "cosmos1y54exmx84cqtasvjnskf9fpx9c0rk9tk8fv4",
      conditionType: ConditionType.CONDITION_TYPE_VOTE
    })
  ).toMatchSnapshot();
});

it('encode', async () => {
  const obj = MsgClaim.fromPartial({
    airdropId: Long.fromInt(1),
    recipient: "cosmos1y54exmx84cqtasvjnskf9fpx9c0rk9tk8fv4",
    conditionType: ConditionType.CONDITION_TYPE_VOTE
  });
  const encoded = MsgClaim.encode(obj).finish();
  const decoded = MsgClaim.decode(encoded);
  expect(encoded instanceof Uint8Array).toBe(true);
  expect(decoded).toMatchSnapshot();
});

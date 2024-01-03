import {RangeCollectionMinter__factory} from '../typechain/factories/RangeCollectionMinter__factory';
(async () => {
  const iface = RangeCollectionMinter__factory.createInterface();
  console.log(
    iface.parseError(
      '0xf3ebc38400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011c37937e08000'
    )
  );
})();

import ShowCoordinatesViewModel from "../../../../src/widgets/ShowCoordinates/ShowCoordinatesViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/ShowCoordinates/ShowCoordinatesViewModel", () => {
  let vm: ShowCoordinatesViewModel;

  beforeEach(() => {
    vm = new ShowCoordinatesViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});

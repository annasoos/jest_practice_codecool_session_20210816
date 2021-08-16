jest.mock('./getNumber'); // this happens automatically with automocking
const getNumber = require('./getNumber');

const findOdd = require("./findOdd_jest");

test('should return only element', async () => {
  // given
  getNumber.mockImplementation(async () => { return [1]} )
  // when
  const result = await findOdd()
  //then
  expect(result).toBe(1);
  getNumber.mockReset() //--> (ha már egyszer hívtam egy implementationt és újra akarom hívni akkor resetre van szükség) nem mindig van rá szükség!!
});

test('should return first element if first is the one with odd appearance', async () => {
  getNumber.mockImplementation(async () => { return [1, 2, 2]} )
  const result = await findOdd()
  expect(result).toBe(1);
  getNumber.mockReset()
});

test('should return last element if first is the one with odd appearance', async () => {
  getNumber.mockImplementation(async () => { return [1, 1, 2]} )
  const result = await findOdd()
  expect(result).toBe(2);
  getNumber.mockReset()
});

test('should return 0 if array is empty', async () => {
  getNumber.mockImplementation(async () => { return []} )
  const result = await findOdd()
  expect(result).toBe(null);
  getNumber.mockReset()
});

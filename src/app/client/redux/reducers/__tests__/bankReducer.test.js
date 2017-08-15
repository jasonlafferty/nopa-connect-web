import bankReducer from '../bankReducer';
import { selectBank } from '../../actions/bankActions';

describe('bankReducer', () => {
  describe('Select Bank', () => {
    it('Should select correct', () => {
      const state = {
        name: 'nothing'
      };
      const result = bankReducer(state, selectBank('panda'));
      expect(result.name).toEqual('panda');
    });
  });
});

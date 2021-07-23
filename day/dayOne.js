//    import { getList, getAdd } from '@/services/api'

//    export defualt {
//       namespace: 'carName';
//       state: {
//         data: []
//       }
//       effects: {
//        * getList({ payload }, { call, put }){
//           const params = yield call(getList, payload);
//           yield put({
//             type: 'show',
//             payload: params,
//           })
//         }
//        * getAdd({ _,{ call, put }){
//           const params = yield call(getAdd);
//           yield put({
//             type: 'show',
//             payload: params
//           })
//         }
//       },
//       reducers: {
//         show(state, { payload }){
//           return {
//             ...state,
//             ...payload,
//           };
//         },
//       },
//     };
// //  -------------------------------------------------- 
// import { getList, getAdd } from '@/services/api'

// export defualt {
//       namespace: carName;
//       state: {
//         data[];
//       }
//       effects: {
//     * getList({ payload }, { call, put }){
//           const params = yield call(getList, payload);
//           yield put({
//             type: 'show',
//             payload: params,
//           })
//         }
//     * getAdd(_, { call, put }){
//           const params = yield call(getAdd);
//           yield put({
//             type: 'show',
//             payload: params,
//           })
//         }
//       }
//       reducers: {
//         show(state, { payload }){
//           return {
//             ...state,
//             ...payload,
//           }
//         }
//       }
//     }
  // -------------------------------------------------- 
  //     function Sdd(state) {
  //       console.log("state==>", state);
  //       const loading = state.loading.effects['carName/getList'];
  //       const carName = state.catName;
  //       return { carName, loading };
  //     }
  //   class App extends Component {
  //     page: 1,
  //     pageSize: 20
  //   }
  //   componentDidMount(){
  //     const { dispatch } = this.props;
  //     dispatch({
  //       type: 'carName/getList'
  //     });
  //   }
  // export defualt connect(Spp)(Dpp);



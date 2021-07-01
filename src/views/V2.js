import React, {useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
// import { increseCount } from "src/redux/reducers/counter";
import { increase, decrease } from "src/redux/reducers/counter";

const V2 = ({match, location}) => {
// dispatch를 사용하기 위한 준비
    const dispatch = useDispatch();

// store에 접근하여 state 가져오기
    const { count } = useSelector(state => state.counter);
    // const onIncrease = () => {
    //     // store에 있는 state 바꾸는 함수 실행
    //     dispatch(increase());
    // }
    //
    // const onDecrease = () => {
    //     // store에 있는 state 바꾸는 함수 실행
    //     dispatch(decrease());
    // }
    console.log("count", count);

    const mapDispatchToProps = dispatch => ({
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease())
    });

    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);



    console.log(match, location);

    return(
        <>
            <>V2</>
            <>{match.params?.id && match.params.id}</>
            <div>
                <h1>{count}</h1>
                <button onClick={onIncrease}>증가</button>
                <button onClick={onDecrease}>감소</button>
            </div>
        </>
    );
}
export default V2;

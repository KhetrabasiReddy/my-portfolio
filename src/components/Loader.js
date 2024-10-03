import { BallTriangle } from 'react-loader-spinner'
function Loader() {
    return (
        <div className="loader d-flex justify-content-center align-items-center bg-light">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
}

export default Loader;

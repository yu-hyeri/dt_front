import './App.css';
import Form from './components/react-hook-form/Form';
import FormTest from './components/react-hook-form/FormTest';
// import Faq from './components/Faq';
// import { ThemeMiddle } from './components/ThemeMiddle';
// import { ThemeProvider } from './components/ThemeProvider';
// import UseCallbackEx from './components/UseCallbackEx';
// import UseCallbackEx2 from './components/UseCallbackEx2';
// import UseMemoEx from './components/UseMemoEx';
// import UseReducerEx from './components/UseReducerEx';
// import useTitle from './hooks/useTitle';


function App() {
    // useTitle();
    return (
        <div className="App">
            {/* <UseMemoEx></UseMemoEx> */}
            {/* <UseCallbackEx></UseCallbackEx> */}
            {/* <UseCallbackEx2 postId={9}></UseCallbackEx2> */}
            {/* <UseReducerEx></UseReducerEx> */}
            {/* <ThemeProvider>
                <ThemeMiddle></ThemeMiddle>
            </ThemeProvider>
            <Faq></Faq> */}
            <Form></Form>
            <br />
            <br />
            <hr />
            <FormTest></FormTest>
        </div>
    );
}

export default App;

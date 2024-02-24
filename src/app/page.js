
// Components
import TextTitle from "@/components/atoms/TextTitle";
import Table from "../components/molecules/Table/Table.jsx";
import Card from "@/components/molecules/Card";

// Styles
import classes from "./styles.module.css";

const App = () => {
    return (
        <div className={classes["container"]}>
            <TextTitle>Seguimiento de Procesos</TextTitle>
            <Card>
            <Table/>
            </Card>
        </div>
    );
};
export default App;

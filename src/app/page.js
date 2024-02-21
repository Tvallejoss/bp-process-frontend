// Components
import TextTitle from "@/components/atoms/TextTitle";
import Table from "@/components/molecules/Table";
import Card from "@/components/molecules/Card";

// Styles
import classes from "./styles.module.css";

const App = () => {
    return (
        <div className={classes["container"]}>
            <TextTitle>Procesos Buspack</TextTitle>
            <Card>
            <Table/>
            </Card>
        </div>
    );
};
export default App;

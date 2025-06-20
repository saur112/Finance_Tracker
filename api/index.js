import Express  from "express";
import cors from "cors";

const app = Express();

app.use(cors());



app.get("/api/hello/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})
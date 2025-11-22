import app from "./Src/index.js"

const PORT = process.env.PORT || 8001;

app.listen(PORT,()=>{
    console.log(`Server is run on http://localhost:${PORT}`);
})


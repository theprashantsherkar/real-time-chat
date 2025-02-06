import { app } from "./index.ts";
import { connectDB } from "./db/database.ts";

connectDB();

const PORT = process.env.PORT || 8000;
if (!PORT) {
    console.log('Port undefined');
}
else {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at port: ${PORT}`)
    })
}

// console.log("hello world");
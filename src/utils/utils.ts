import * as fs from "fs";
import path from "path";
import {ResponseError} from "../error/response-error";

export const removeImage = (filePath : string) => {
    console.log(__dirname)
    filePath = path.join(__dirname, '../../', filePath)
    console.log(filePath)
    fs.unlink(filePath, err => {
        console.log(err)
    })
}
import { HttpInterceptorFn } from '@angular/common/http';
import {sendTokenParam} from "../../utils/constants/global.constants";
import {StorageHelper} from "../storage.helper";
import {GlobalHelper} from "../global.helper";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const sendTokenName = Object.keys(sendTokenParam)[0];
  const tokenParamName = "token"


  if (req.headers.has(sendTokenName)) {
    // TODO: Check if token exists.

    const newRequest = req.clone();
    const storageHelper = new StorageHelper();
    const globalHelper = new GlobalHelper(storageHelper);
    const token = globalHelper.getToken();

    newRequest.headers.set(tokenParamName, token!);

    return next(newRequest);
  }

  return next(req);
};

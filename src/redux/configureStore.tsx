import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

// logs will be displayed in dev mode only to make debugging easier.
const logger = createLogger();
const history = createBrowserHistory();

const dev = process.env.NODE_ENV === "development";

let middleware = dev
	? applyMiddleware(logger, sagaMiddleware)
	: applyMiddleware(sagaMiddleware);

if (dev) {
	middleware = composeWithDevTools(middleware);
}

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export default () => {
	const store = createStore(persistedReducer, middleware);
	const persistor = persistStore(store);
	return {
		store,
		persistor,
		runSaga: sagaMiddleware.run(rootSaga),
	};
};

export { history };

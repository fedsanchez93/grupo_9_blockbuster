import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import MovieList from "./MovieList";
import NotFound from "./NotFound";

import { Route, Switch} from 'react-router-dom'

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
            <TopBar />
                <Switch>
                    <Route path="/" exact>
                        <ContentRowTop />
                        <MovieList />
                        <Footer />
                    </Route>
                   
                    <Route path={'/moviesList'}>
                        <MovieList />
                    </Route>
                    <Route path={'/resumen'} >
                        <ContentRowTop />
                    </Route>
                    <Route >
                <>
                <NotFound/>
                </>
            </Route>
                    </Switch>
                
            </div>
        </div>
    );
}
export default ContentWrapper;

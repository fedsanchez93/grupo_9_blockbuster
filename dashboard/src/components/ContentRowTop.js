import React from "react";
import GenresInDb from "./GenresInDb";
import ContentRowMovies from "./ContentRowMovies";
import { Route, Switch} from 'react-router-dom'
import NotFound from "./NotFound";
import LastMovieInDb from "./LastMovieInDb";
import MovieList from "./MovieList";
import Footer from "./Footer";

function ContentRowTop() {
    return (
        <>
        <div className="container-fluid">
            <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Blockbuster Dashboard</h1>
            </div>
        
        <Switch>
            <Route path={'/'} exact>
                <ContentRowMovies />
                <div className="row">
                    <LastMovieInDb />
                    <GenresInDb /> 
                    <div id="content">
                        <MovieList />
                        <Footer />
                    </div>
                </div>
            </Route>

            <Route path={'/metricas'}>
                <ContentRowMovies />
            </Route>
            <Route path={'/moviesList'}>
                <MovieList />
            </Route>
            <div className="row">
                <Route path={'/lastMovie'}>
                    <LastMovieInDb/>
                </Route>
                
                <Route path={'/genres'}>
                    <GenresInDb />
                </Route>
            </div>
            <Route >
                <NotFound/>
            </Route>
        </Switch>
        </div>

        
        </>
    );
}
export default ContentRowTop;

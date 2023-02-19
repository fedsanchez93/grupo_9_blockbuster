import React from "react";
import imagenFondo from "../assets/images/mandalorian.jpg";
import GenresInDb from "./GenresInDb";
import ContentRowMovies from "./ContentRowMovies";
import { Route, Switch} from 'react-router-dom'
import NotFound from "./NotFound";

function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Blockbuster Dashboard</h1>
            </div>
        

            <Route path={'/resumen'} exact>
                {/*<!-- Content Row Movies-->*/}
                <ContentRowMovies />

            <div className="row">
                {/*<!-- Last Movie in DB -->*/}
                
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">
                                Last movie in Data Base
                            </h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img
                                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                    style={{ width: 40 + "rem" }}
                                    src={imagenFondo}
                                    alt=" Star Wars - Mandalorian "
                                />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores, consequatur explicabo
                                officia inventore libero veritatis iure
                                voluptate reiciendis a magnam, vitae, aperiam
                                voluptatum non corporis quae dolorem culpa
                                citationem ratione aperiam voluptatum non
                                corporis ratione aperiam voluptatum quae dolorem
                                culpa ratione aperiam voluptatum?
                            </p>
                            <a
                                className="btn btn-danger"
                                target="_blank"
                                rel="nofollow"
                                href="/"
                            >
                                View movie detail
                            </a>
                        </div>
                    </div>
                </div>
            
                    <GenresInDb />                
            </div>
            </Route>

            <Route path={'/resumen/charts'}>
                <ContentRowMovies />
            </Route>

            <div className="row">
                <Route path={'/resumen/lastMovie'}>


                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">
                                Last movie in Data Base
                            </h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img
                                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                    style={{ width: 40 + "rem" }}
                                    src={imagenFondo}
                                    alt=" Star Wars - Mandalorian "
                                />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores, consequatur explicabo
                                officia inventore libero veritatis iure
                                voluptate reiciendis a magnam, vitae, aperiam
                                voluptatum non corporis quae dolorem culpa
                                citationem ratione aperiam voluptatum non
                                corporis ratione aperiam voluptatum quae dolorem
                                culpa ratione aperiam voluptatum?
                            </p>
                            <a
                                className="btn btn-danger"
                                target="_blank"
                                rel="nofollow"
                                href="/"
                            >
                                View movie detail
                            </a>
                        </div>
                    </div>
                </div>
                </Route>
                {/*<!-- End content row last movie in Data Base -->*/}

                {/*<!-- Genres in DB -->*/}
                <Route path={'/resumen/genres'}>
                    <GenresInDb />
                </Route>
                {/*<!--End Genres In Db-->*/}
            </div>
            {/* <Switch>
            <Route exact>
                <>
                <NotFound/>
                </>
            </Route>
            </Switch> */}
        
        </div>
    );
}
export default ContentRowTop;

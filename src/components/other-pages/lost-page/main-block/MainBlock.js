import React, {useEffect, useState} from "react";
import './mainBlock.scss';
import Grid from "@material-ui/core/Grid";
import PetInfo from "./pet-info";
import GoogleMap from "./google-map";
import Button from "@material-ui/core/Button";
import { getPostLostPets, getPostFoundPets } from "../../../../services";
import Spinner from "../../../../spinner/Spinner";

const MainBlock = (props) => {
    const [map, setMap] = useState(false);
    const [posts, setPosts] = useState([]);
    const { setBigMap, bigMap, page } = props;

    useEffect(() => {
        console.log(page)
        async function fetchLostPosts() {
            await getPostLostPets()
                .then(data => {
                    console.log(data)
                    setPosts(data.posts);
                })
                .catch(error => console.log(error));
        }
        async function fetchFoundPosts() {
            await getPostFoundPets()
                .then(data => {
                    console.log(data)
                    setPosts(data.posts);
                })
                .catch(error => console.log(error));
        }
        if(page === 'lost') {
            fetchLostPosts();
        } else if (page === 'found'){
            fetchFoundPosts();
        }
    }, [page]);

    console.log(posts)

    const arrTmp = [];
    posts.forEach(post => {
        arrTmp.push(<PetInfo post={post}/>);
    });

    return (
        <Grid container direction="row" className="main-block-lost">
            <Grid container item md={9} lg={12} className="lost-left-side">
                <Grid container direction="column">
                    <div className="tags-for-search">
                        <input type="text" placeholder="Type"/>
                        <input type="text" placeholder="Breed"/>
                        <input type="text" placeholder="Additional features"/>
                        <input type="text" placeholder="Location"/>
                        {!map ? <Button className="map-view-btn" variant="contained" onClick={() => {
                            setMap(true);
                        }}><i className="fa fa-map-marked"/>Map view</Button> :
                        <Button className="list-view-btn" variant="contained" onClick={() => {
                            setMap(false);
                        }}><i className="fas fa-list"/>List view</Button>}
                    </div>
                    {map ?
                        <Grid container item lg={8}>
                            <GoogleMap posts={posts}/>
                        </Grid>
                        : <Grid container direction="row">
                        <Grid container item lg={bigMap ? 7 : 8} direction="column">
                            {posts.length > 0 ? arrTmp : <Spinner/>}
                        </Grid>
                        <Grid container item lg={bigMap ? 5 : 4} className="map-container">
                            {!bigMap ? <span onClick={() => {
                                setBigMap(true);
                            }}><i className="fas fa-chevron-left"/>Expand map</span> :
                            <span onClick={() => {
                                setBigMap(false);
                            }}><i className="fas fa-chevron-right"/>Collapse map</span>}
                            <GoogleMap posts={posts}/>
                        </Grid>
                    </Grid>}
                </Grid>
            </Grid>
            <Grid container item sm={3} className="lost-right-side"/>
        </Grid>
    )
};

export default MainBlock;
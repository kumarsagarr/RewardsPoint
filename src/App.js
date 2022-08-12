import "./App.css";
import * as React from "react";
import { Autocomplete, CardActionArea, Grid, IconButton, TextField } from "@mui/material";
import { makeAPIRequestCall } from "./Services/service";
import ClearIcon from "@mui/icons-material/Clear";
import { SearchOutlined } from "@mui/icons-material";
import MovieListCard from "./MovieListCard";

function App() {
  const [list, setList] = React.useState([]);
  const [searchInputOption, setSearchInputOption] = React.useState();

  const getMovieList = async () => {
    let movieList = await makeAPIRequestCall("movies");
    const { data, message } = movieList.data;
    if (message.includes("Success")) {
      setList(data);
    }
    console.log("movieList", movieList);
  };

  React.useEffect(() => {
    getMovieList();
  }, []);

 
  const handleGlobalChange = (e) => {
    console.log("currentTarget", e.target.value);
    // setSearchInput
    // console.log("searchInput", searchInput);
    const listCopy = list;
    const updatedList = listCopy;
    
    console.log("updatedList", updatedList);
    // setList([...updatedList])
  };

  const SearchBox = () => {
    return (
      <Grid style={{ marginTop: "30px", display:'flex', justifyContent:'center' }} item xs={4}>
        {/* */}
        <Autocomplete
          id="combo-box-demo"
          options={[]}
          sx={{ width: 300 }}
          openOnFocus
          freeSolo
          renderInput={(params) =><TextField 
            placeholder="Search Movie"
            label="Search Your Movie"
            variant="outlined"
            onChange={handleGlobalChange}
            sx={{ width: "400px" }}
            size="small"
            {...params} 
            /> 
          }
        />
      </Grid>
    );
  };

  return (
    <div className="App">
      <SearchBox />
      <Grid container spacing={2}>
        {list &&
          list.map((item) => <MovieListCard key={item.id} item={item} />)}
      </Grid>
    </div>
  );
}

export default App;


{/* <TextField
            id="standard-bare"
            variant="outlined"
            placeholder="Search Movie"
            label="Search Your Movie"
            size="small"
            {...params}
            // value={searchInput}
            onBlur={(e)=>{setSearchInput(e.target.value)}}
            onChange={(e)=>handleGlobalChange(e)}
            sx={{ width: "400px" }}
            InputProps={{
              endAdornment: (
                <>
                  {false && (
                    <IconButton onClick={(e)=>{console.log(e)}}>
                      <ClearIcon />
                    </IconButton>
                  )}
                  <IconButton onClick={handleSearchValue}>
                    <SearchOutlined />
                  </IconButton>
                </>
              ),
            }}
          />  */}
import create from "zustand";

const useStore = create((set, get) => ({
  currentData: [],
  isSuccess: false,
  activeSession: { topM: "active-btn", topS: "", com: "" },
  hasError:false,
  getData: async (query, id, img) => {
    let activeSession = {};
    activeSession[query] = "active-btn";

    set((state) => {
      return {
        ...state,
        isSuccess: false,
        activeSession: activeSession,
        informationImg: img,
      };
    });
    let newData = await fetchingData(query, id);
    if (typeof newData != "object") {
      console.log("its error");
      set(state=>{return{...state,hasError:!state.hasError , isSuccess:true}})
    } else {
      set((state) => {
        return { currentData: newData, isSuccess: true ,hasError:false };
      });
      window.scrollTo(0, 0);
    }
  },

  informationImg: "",
}));

async function fetchingData(query, id) {
  let apikey = "k_px3q3o5r";
//    k_qaexhlot
  let url = "";
  let data = null;

  switch (query) {
    case "topM":
      url = `https://imdb-api.com/en/API/Top250Movies/${apikey}`;
      data = await fetching(url);
      return data;
      break;

    case "topS":
      url = `https://imdb-api.com/en/API/MostPopularTVs/${apikey}`;
      data = await fetching(url);
      return data;
      break;

    case "com":
      url = `https://imdb-api.com/en/API/ComingSoon/${apikey}`;
      data = await fetching(url);
      return data;
      break;
    case "wiki":
      url = `https://imdb-api.com/en/API/Wikipedia/${apikey}/${id}`;
      data = await fetching(url);
      return data;
      break;
    case "search":
        url = `https://imdb-api.com/en/API/Search/${apikey}/${id}`;
      data = await fetching(url);
      console.log(data);
      return data;
      break;
  }
}

async function fetching(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    if (data["errorMessage"] != "") {
      return "error happen";
    } else {
      if (data["items"] == undefined) {
        return data;
      } else {
        return data["items"];
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export default useStore;

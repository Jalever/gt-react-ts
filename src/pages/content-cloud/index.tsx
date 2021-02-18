import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { rootReducer, RootState } from "@/store/index";
import * as ChatActions from "@/store/chat/actions";
import * as ChatTypes from "@/store/chat/types";
import REQUEST from "@/request/index";
import * as CONSTANTS from "@/constants/index";
import ListRow from "@/components/list-row";
import BannerRow from "@/components/banner-row";

import "./index.less";

const { useState, useEffect, useReducer, useRef } = React;

//get content-cloud data
const fetchContentData = async () => {
  const params = {
    channelId: CONSTANTS.VAR_CHANNELID,
    pageId: CONSTANTS.VAR_PAGEID
  };
  const data = await REQUEST.getMainContentData(params);
  const { activityVoList } = data;
  return activityVoList;
}

//get banner-list data
const fetchBanner = async () => {
  const params = {
    channelId: CONSTANTS.VAR_CHANNELID,
    code: CONSTANTS.VAR_CODE
  };
  const data = await REQUEST.getBanner(params);
  return data;
}

const ContentCloud: React.FC = (props: any) => {
  const [list, setList] = useState([]);
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    const onAsync = async () => {
      const resList = await fetchContentData();
      const resBannerList = await fetchBanner();
      setList(resList);
      setBannerList(resBannerList);
    }
    onAsync();



  }, []);

  // console.warn('TYPES');
  // console.log(TYPES);
  // console.log('\n');

  console.warn('bannerList');
  console.log(bannerList);
  console.log('\n');




  return (
    <React.Fragment>
      <div className='app'>
        {
          <BannerRow items={bannerList} />
        }

        {
          list.map((row: any, idx: number) => {
            return <ListRow key={row.id} listrow={...row} />
          })
        }
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state: RootState) => state;
const mapDispatchToProps = (dispatch: Dispatch) => ({
  sendMessage: (msg: ChatTypes.Message) => dispatch(ChatActions.SendMessage(msg))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentCloud);
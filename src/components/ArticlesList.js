import React from "react";
import { NavLink } from "react-router-dom";
import VoteUpDown from "./VoteUpDown";
import { Grid, Segment } from "semantic-ui-react";

const ArticlesList = props => {
  const { article } = props;
  return (
    <Grid columns="equal">
      <Grid.Column>
        <Segment>
          <VoteUpDown type="articles" votes={article.votes} id={article._id} />
        </Segment>
      </Grid.Column>
      <Grid.Column width={12}>
        <NavLink to={`/articles/${article._id}`} key={article._id}>
          <Segment style={{ height: "100%" }}>
            {article.title}
            <p>
              <em>
                by: <strong>{article.created_by}</strong>
              </em>
            </p>
          </Segment>
        </NavLink>
      </Grid.Column>
    </Grid>
    // <div className="columns">
    //   <div className="column">
    //     <div className="box" style={{ height: "100%" }}>
    //       <VoteUpDown type="articles" votes={article.votes} id={article._id} />
    //     </div>
    //   </div>
    //   <div className="column is-three-quarters">
    //     <div className="box" style={{ height: "100%", fontSize: "1.2rem" }}>
    //       <NavLink to={`/articles/${article._id}`} key={article._id}>
    //         {article.title}
    //         <br />
    //         <br />
    //         <p>
    //           <small>
    //             <em>
    //               by: <strong>{article.created_by}</strong>
    //             </em>
    //           </small>
    //         </p>
    //       </NavLink>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ArticlesList;

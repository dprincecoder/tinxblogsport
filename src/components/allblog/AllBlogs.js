import React from 'react'
import { Link } from 'react-router-dom'
import './allBlog.css'
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatIcon from "@material-ui/icons/Chat";
import NearMeIcon from "@material-ui/icons/NearMe";
import FavoriteIcon from "@material-ui/icons/Favorite";
import img from './PhotoGrid_Plus_1605606730565.png'
const AllBlogs = () => {
    return (
			<div className="allBlogs">
				<div className="allBlogUserDetails">
					<img src={img} alt="" />
					<div className="allBlogUserDetailsAndPublishTime">
						<h4 className="allBlogUsername">dprincecoder</h4>
						<i>1m ago</i>
					</div>
					<div className="allBlogUserAddToFavorite">
						<FavoriteIcon className="addToFavorite" />
					</div>
				</div>
				<div className="allBlogUserDescP">
					<p className="allBlogUserDesc">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
						tempora exercitationem! Eaque, sequi harum voluptates illum modi rem
						earum deserunt, accusantium amet inventore aperiam cum pariatur
						vero. Minima excepturi nihil facere necessitatibus, vel accusantium
						eius voluptatum iusto recusandae sit cumque porro dignissimos odit a
						at ullam quisquam velit voluptatem! Ullam sed quos necessitatibus
						cumque obcaecati! Vitae sequi quaerat, voluptatum debitis unde
						voluptas ut molestiae minus. Quaerat laborum aperiam at quasi porro
						cupiditate enim, delectus, cum explicabo alias expedita quia dolorem
						doloribus. Expedita, totam! Libero odio consequuntur maxime aut nam
						est excepturi beatae tempora laboriosam, aspernatur voluptas
						laborum, harum a sint aliquid vitae explicabo, recusandae nesciunt
						minima quas provident modi iste dolor? Similique, nihil! Hic
						mollitia, sint placeat necessitatibus ab voluptates dolorem? Ducimus
						aliquid dignissimos molestias accusantium saepe tenetur velit libero
						autem laudantium blanditiis quisquam animi, nulla eaque ex deleniti,
						eius deserunt id numquam, enim exercitationem quaerat vel pariatur!
						Quasi nulla consequuntur iure ducimus quisquam, ipsum illo quod
						repellat ipsa nisi ab esse consectetur est quas repellendus nostrum
						omnis cumque reprehenderit dicta repudiandae natus beatae sunt
						veritatis! Aut repellat iure alias ipsum sint provident reiciendis
						magnam, eveniet, veritatis labore quaerat similique! Maxime
						reiciendis quas inventore cum saepe minus animi repellat ex.{" "}
					</p>
					<Link to="/blog/2423">
						<b>Read More...</b>
					</Link>
				</div>

				<div className="allBlogUserBlogImages">
					<img src={img} alt="new blog" />
					<img src={img} alt="new blog" />
				</div>
				<div className="allBlogReactOption">
					<strong>5 likes</strong>
					<strong>7 comments</strong>
				</div>
				<div className="allBlogReactBtn">
					<span>
						<ThumbUpIcon className="allBlogReactIcon" />
						like
					</span>
					<span>
						<ChatIcon className="allBlogReactIcon allBlogReactIconAction" />
						comment
					</span>
					<span>
						<NearMeIcon className="allBlogReactIcon" />
						share
					</span>
				</div>
			</div>
		);
}

export default AllBlogs

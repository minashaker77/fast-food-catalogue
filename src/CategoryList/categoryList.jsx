/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import axios from "../axios";

const CategoryList = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		const fetchCategories = async () => {
			const response = await axios.get("/FoodCategory/categories");
			setCategories(response.data);
		};
		fetchCategories();
	}, []);
	return (
		<nav className="container mt-n5">
			<div
				className="d-flex align-items-center bg-white rounded-3 shadow-lg py-4"
				style={{ height: "80px" }}>
				<ul className="nav">
					<li className="nav-item">
						<a className="nav-link" href="#">
							همه فست فودها
						</a>
					</li>
					{categories.map((category) => (
						<li className="nav-item" key={category.id}>
							<a className="nav-link" href="#">
								{category.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
export default CategoryList;

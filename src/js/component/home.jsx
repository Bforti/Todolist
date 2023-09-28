import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
let initial={
	label:"",
	done:false
}
const Home = () => {
	const [initialTarea, setInitialTarea]=useState(initial)
	const[tareaCulminada, setTareaCulminada]=useState([])
	const[error, setError]=useState(false)

	const agregandoTareas =(event)=>{
		setInitialTarea({
			label:event.target.value,
			done:false
		})
		}
	const guardandotareas=(event)=>{
		
		if(event.key=="Enter"){
			setTareaCulminada([...tareaCulminada, initialTarea])
            setInitialTarea(initial)
		}
		
	}
	const deleteTask=(event)=>{
    let newArr = setTareaCulminada.map((item,index)=>{
		
		item.pop()

		event.stopPropagation();

	})
	return newArr;



	}

	return (
		<div className="text-center p-3 justify-content-center border border-black rounded m-3 border-3">
			<h1>Todos</h1>
		<input type="text"
		    className="form-control"
			aria-label="ingresa tu tarea"
		    placeholder="ingresa tu tarea"
		    name="label"
		    value={initialTarea.label} 
		    onChange={agregandoTareas}
			onKeyDown={guardandotareas}
		 />
		 <ul className="list-inline">
			{tareaCulminada.map((item,index)=>{
				return(
					<li key={index} 
					    className="list-inline-item d-flex justify-content-between"
						>
						<div className="m-2">
						<i className="fa-solid fa-check m-1"></i>
						{item.label}
						</div>
						<button
					    type="button" 
						className="btn-close btn-outline-danger m-2 me-0"
						aria-label="Close"
						onClick={deleteTask}></button>
					</li>	


				)
			})
			}

		</ul>
		</div>
	);
};

export default Home;

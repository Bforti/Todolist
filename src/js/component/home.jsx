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
		console.log(event.key)
		if(event.key=="Enter"){
			setTareaCulminada([...tareaCulminada, initialTarea])
            setInitialTarea(initial)
		}
		
	}

	return (
		<div className="text-center">
		<input type="text"
		    placeholder="ingresa tu tarea"
		    name="label"
		    value={initialTarea.label} 
		    onChange={agregandoTareas}
			onKeyDown={guardandotareas}
		 />
		 <ul>
			{tareaCulminada.map((item,index)=>{
				return(
					<li key={index}>
						{item.label}
					</li>	


				)
			})
			}

		</ul>
		</div>
	);
};

export default Home;

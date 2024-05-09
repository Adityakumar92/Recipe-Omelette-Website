// import { useState } from 'react'
import Image from "../image/image-omelette.jpeg"
function App() {
  

  return (
    <>
    <div className="sm:bg-orange-200 flex justify-center items-center max-h-fit w-dwh">
      <div className="sm:w-6/12 p-4 sm:my-10 bg-white rounded-xl">
        <div className=" border-r-4 mb-4">
          <img src={Image} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Simple Omelette Recipe</h1>
          <p className="mb-2">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>

          <div className="py-2 border-b border-gray-200 bg-pink-400 mx-4 rounded-xl p-2 mb-4">
            <h3 className="text-xl font-bold mb-3  text-pink-600">Preparation time</h3>
            <ul className="m-2 p-5 list-disc">
              <li><b>Total: </b> Approximately 10 minutes</li>
              <li><b>Preparation: </b>5 minutes</li>
              <li><b>Cooking: </b>5 minutes</li>
            </ul>
          </div>

          <div><h2 className="text-xl font-bold mb-3 text-amber-700">Ingredients</h2></div>
          <ul className="p-5 list-disc">
            <li>2-3 large eggs</li>
            <li>salt, to taste</li>
            <li>Pepper, to tatse</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>

          <hr className="mb-2" />

          <div className="p-2"><h2 className="text-xl font-bold mb-3  text-amber-700">Instructions</h2></div>
          <ol className="list-decimal p-5">
            <li><b>Beat the eggs: </b>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.You can add a tablespoon of water or milk for a fluffier texture</li>
            <li><b>Heat the pan: </b>Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li><b>Cook the omelette: </b>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
            <li><b>Add fillings (optional): </b>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li><b>Fold and serve: </b>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li><b>Enjoy: </b>Serve hot, with additional salt and pepper if needed.</li>
          </ol>

          <hr className="mb-2" />

          <div className="p-2"><h2 className="text-xl font-bold mb-3 text-amber-700">Nutrition</h2></div>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>

          <div className="flex justify-evenly">
            <div>Calories</div>
            <div className=" text-amber-700">277kcal <hr /></div>
          </div>
          <hr className="px-10 py-2"/>

          <div className="flex justify-evenly">
            <div>Carbs <hr /></div>
            <div className=" text-amber-700">0g <hr /></div>
          </div>
          <hr className="px-10 py-2" />

          <div className="flex justify-evenly">
            <div>Protein <hr /></div>
            <div className=" text-amber-700">20g <hr /></div>
          </div>
          <hr className="px-10 py-2" />

          <div className="flex justify-evenly">
            <div>Fats <hr /></div>
            <div className=" text-amber-700">22g <hr /></div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default App

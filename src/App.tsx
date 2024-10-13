import { useSearchParams } from "react-router-dom";
import "./App.css";
import { SuperJuiceRecipe } from "./recipes/recipes";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const peelWeight = searchParams.get("peelWeight") ?? "0";

  const peelWeightNumber = parseFloat(peelWeight);
  const type = searchParams.get("type") ?? "lemon";

  const superJuiceRecipe = new SuperJuiceRecipe(
    type,
    Number.isNaN(peelWeightNumber) ? 0 : peelWeightNumber
  );
  return (
    <>
      <h1>Super Juice Recipe</h1>
      <div className="recipe-container">
        <p>
          <span className="label">Type:</span>
          <select
            onChange={(v) => {
              setSearchParams({ type: v.target.value, peelWeight });
            }}
          >
            <option value="lemon">Lemon</option>
            <option value="lime">Lime</option>
          </select>
        </p>
        <p>
          <span className="label">Peel Weight:</span>
          <input
            name="peelWeight"
            type="number"
            value={peelWeightNumber ?? undefined}
            onChange={(v) =>
              setSearchParams({ peelWeight: v.target.value, type })
            }
          />
        </p>
        <p>
          <span className="label">Water:</span>
          {superJuiceRecipe.water.toFixed(0)}
        </p>
        <p>
          <span className="label">Citric Acid:</span>
          {superJuiceRecipe.citricAcid.toFixed(0)}
        </p>
        <p>
          <span className="label">Gum Arabic</span>
          {superJuiceRecipe.gumArabic.toFixed(0)}
        </p>
        <p>
          <span className="label">Total Liquid:</span>
          {superJuiceRecipe.totalLiquid.toFixed(0)}
        </p>
      </div>
    </>
  );
}

export default App;


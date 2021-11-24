import React from "react"
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button"
import "views/BuildAndLease/BuildLease.css";

const useStyles = makeStyles(styles);
import { useState } from "react";
import axios from "axios";
import BuildLeaseTable from "./BuildLeaseTable";
import { Icon } from "@material-ui/core";
function BuildLease() {
  const classes = useStyles();
  const [data, setData] = useState({
    pov1: "I want to see returns (IRR) at a particular price and business plan",
    pov2: "I am buying the land and developing the project myself",
    eval_mn_crore: "INR crore", land_parcel: "", cost_of_land: "", LO_share: "", leasable_area_project: "",
    rate_to_lease_inv: "", quarterly_escalation: "", CAM_margin_profit: "", saleable_area_or_built_up: "Saleable Area",
    builtup_area_project: "", cons_cost_estimate: "", quarterly_escalation_cons_cost: "", brokerage: "",
    upfront_costs: "", other_costs: "", operational_cost: "", quarters_to_launch_project: "",
    quarters_to_complete_consturction: "", leasable_area: "", peak_lease: "",
    post_peak_lease: "", asset_exit_peak: "",
    construction_finance_lim: "", construction_finance_cost: "", LRD_cost: "", LRD_principal_amortisation: "",
    desired_return: "", exit_cap_rate: ""
  })


  

  const [error, setError] = useState({
    eval_mn_crore: false, land_parcel: false, cost_of_land: false, LO_share: false, leasable_area_project: false,
    rate_to_lease_inv: false, quarterly_escalation: false, CAM_margin_profit: false, saleable_area_or_built_up: "Saleable Area",
    builtup_area_project: false, cons_cost_estimate: false, quarterly_escalation_cons_cost: false, brokerage: false,
    upfront_costs: false, other_costs: false, operational_cost: false, quarters_to_launch_project: false,
    quarters_to_complete_consturction: false, leasable_area: false, peak_lease: false,
    post_peak_lease: false, asset_exit_peak: false,
    construction_finance_lim: false, construction_finance_cost: false, LRD_cost: false, LRD_principal_amortisation: false,
    desired_return: false, exit_cap_rate: false
  })

  const [pov2, setPov2] = useState([
    "I am buying the land and developing the project myself",
    "I am buying the land as a financial investor and will do a Revenue Share JDA with a developer"
  ])

  const pov1Data = [
    "I want to see returns (IRR) at a particular price and business plan",
    "I want to value the asset (NPV) basis a business plan and discount rate or desired return"
  ]

  const pov2Data_1 = [
    "I am buying the land and developing the project myself",
    "I am buying the land as a financial investor and will do a Revenue Share JDA with a developer"
  ]

  const pov2Data_2 = [
    "I want to value the asset basis the total project free cashflows",
    "I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer"
  ]

  const onPov1Change = (e) => {
    const value = e.target.value;
    let selectedPov2 = "";
    if (value === pov1Data[0]) {
      selectedPov2 = pov2Data_1[0];
      setPov2(pov2Data_1);
    } else {
      selectedPov2 = pov2Data_2[0];
      setPov2(pov2Data_2);
    }
    setData({ ...data, pov1: value, pov2: selectedPov2 });
  }

  const handlePov2Change = (e) => {
    const value = e.target.value;
    let LO_share = data.LO_share;
    if (value != "I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer") {
      LO_share = "";
    }
    setData({ ...data, pov2: value, LO_share: LO_share });
  }

  const handleCurrency = (e) => {
    setData({ ...data, eval_mn_crore: e.target.value });
  }

  const onCustomInputChange = (e) => {
    const { name, value } = e;
    if (value === "" || !isNumber(value)) error[name] = true;
    else error[name] = false;
    setError({ ...error });
    setData({ ...data, [name]: value });
  }

  const saleBuiltChange = (e) => {
    const value = e.target.value;
    setData({ ...data, saleable_area_or_built_up: value });
  }

  const [tableData, setTableData] = useState(null);
  const [isSaving, setSaving] = useState(false);
  function isNumber(str) {
    if (typeof str != "string") return false // we only process strings!
    // could also coerce to string: str = ""+str
    return !isNaN(str) && !isNaN(parseFloat(str))
  }

  const handleSubmit = (e) => {
    setTableData(null);
    e.preventDefault();
    if (data.saleable_area_or_built_up != "Built Up Area") {
      data.builtup_area_project = "";
    }
    if (data.pov1 != "I want to value the asset (NPV) basis a business plan and discount rate or desired return") {
      data.desired_return = "";
    }

    if (data.LO_share != "" && !data.LO_share.toString().includes("%")) {
      data.LO_share += "%";
    }
    if (data.quarterly_escalation_cons_cost != "" && !data.quarterly_escalation_cons_cost.toString().includes("%")) {
      data.quarterly_escalation_cons_cost += "%";
    }
    if (data.leasable_area != "" && !data.leasable_area.toString().includes("%")) {
      data.leasable_area += "%";
    }
    if (data.peak_lease != "" && !data.peak_lease.toString().includes("%")) {
      data.peak_lease += "%";
    }
    if (data.construction_finance_lim != "" && !data.construction_finance_lim.toString().includes("%")) {
      data.construction_finance_lim += "%";
    }
    if (data.construction_finance_cost != "" && !data.construction_finance_cost.toString().includes("%")) {
      data.construction_finance_cost += "%";
    }
    if (data.construction_finance_cost != "" && !data.construction_finance_cost.toString().includes("%")) {
      data.construction_finance_cost += "%";
    }
    if (data.LRD_cost != "" && !data.construction_finance_cost.toString().includes("%")) {
      data.LRD_cost += "%";
    }
    if (data.desired_return != "" && !data.desired_return.toString().includes("%")) {
      data.desired_return += "%";
    }
    if (data.exit_cap_rate != "" && !data.exit_cap_rate.toString().includes("%")) {
      data.exit_cap_rate += "%";
    }

    let result = true;
    if (data.saleable_area_or_built_up == "Built Up Area" && (data.builtup_area_project == "" || !isNumber(data.builtup_area_project.replace("%", "")))) {
      result = false;
      error["builtup_area_project"] = true;
    }
    if (data.pov1 == pov1Data[1] && (data.desired_return == "" || !isNumber(data.desired_return.replace("%", "")))) {
      result = false;
      error["desired_return"] = true;
    }
    if (data.pov2 == pov2Data_2[1] && (data.LO_share == "" || !isNumber(data.LO_share.replace("%", "")))) {
      result = false;
      error["LO_share"] = true;
    }
    if (data.land_parcel == "" || !isNumber(data.land_parcel.replace("%", ""))) {
      result = false;
      error["land_parcel"] = true;
    }
    if (data.cost_of_land == "" || !isNumber(data.cost_of_land.replace("%", ""))) {
      result = false;
      error["cost_of_land"] = true;
    }
    if (data.leasable_area_project == "" || !isNumber(data.leasable_area_project.replace("%", ""))) {
      result = false;
      error["leasable_area_project"] = true;
    }
    if (data.rate_to_lease_inv == "" || !isNumber(data.rate_to_lease_inv.replace("%", ""))) {
      result = false;
      error["rate_to_lease_inv"] = true;
    }
    if (data.quarterly_escalation == "" || !isNumber(data.quarterly_escalation.replace("%", ""))) {
      result = false;
      error["quarterly_escalation"] = true;
    }
    if (data.CAM_margin_profit == "" || !isNumber(data.CAM_margin_profit.replace("%", ""))) {
      result = false;
      error["CAM_margin_profit"] = true;
    }
    if (data.cons_cost_estimate == "" || !isNumber(data.cons_cost_estimate.replace("%", ""))) {
      result = false;
      error["cons_cost_estimate"] = true;
    }
    if (data.quarterly_escalation_cons_cost == "" || !isNumber(data.quarterly_escalation_cons_cost.replace("%", ""))) {
      result = false;
      error["quarterly_escalation_cons_cost"] = true;
    }
    if (data.brokerage == "" || !isNumber(data.brokerage.replace("%", ""))) {
      result = false;
      error["brokerage"] = true;
    }
    if (data.upfront_costs == "" || !isNumber(data.upfront_costs.replace("%", ""))) {
      result = false;
      error["upfront_costs"] = true;
    }
    if (data.other_costs == "" || !isNumber(data.other_costs.replace("%", ""))) {
      result = false;
      error["other_costs"] = true;
    }
    if (data.operational_cost == "" || !isNumber(data.operational_cost.replace("%", ""))) {
      result = false;
      error["operational_cost"] = true;
    }
    if (data.quarters_to_launch_project == "" || !isNumber(data.quarters_to_launch_project.replace("%", ""))) {
      result = false;
      error["quarters_to_launch_project"] = true;
    }
    if (data.quarters_to_complete_consturction == "" || !isNumber(data.quarters_to_complete_consturction.replace("%", ""))) {
      result = false;
      error["quarters_to_complete_consturction"] = true;
    }
    if (data.leasable_area == "" || !isNumber(data.leasable_area.replace("%", ""))) {
      result = false;
      error["leasable_area"] = true;
    }
    if (data.peak_lease == "" || !isNumber(data.peak_lease.replace("%", ""))) {
      result = false;
      error["peak_lease"] = true;
    }
    if (data.post_peak_lease == "" || !isNumber(data.post_peak_lease.replace("%", ""))) {
      result = false;
      error["post_peak_lease"] = true;
    }
    if (data.asset_exit_peak == "" || !isNumber(data.asset_exit_peak.replace("%", ""))) {
      result = false;
      error["asset_exit_peak"] = true;
    }
    if (data.construction_finance_lim == "" || !isNumber(data.construction_finance_lim.replace("%", ""))) {
      result = false;
      error["construction_finance_lim"] = true;
    }
    if (data.construction_finance_cost == "" || !isNumber(data.construction_finance_cost.replace("%", ""))) {
      result = false;
      error["construction_finance_cost"] = true;
    }
    if (data.LRD_cost == "" || !isNumber(data.LRD_cost.replace("%", ""))) {
      result = false;
      error["LRD_cost"] = true;
    }
    if (data.LRD_principal_amortisation == "" || !isNumber(data.LRD_principal_amortisation.replace("%", ""))) {
      result = false;
      error["LRD_principal_amortisation"] = true;
    }
    if (data.exit_cap_rate == "" || !isNumber(data.exit_cap_rate.replace("%", ""))) {
      result = false;
      error["exit_cap_rate"] = true;
    }
    setError({ ...error });
    setSaving(result);
    console.log(error, data, result);
    if (result) {
      axios({
        url: `https://script.google.com/macros/s/AKfycbwsoWPwotuI55Y31vXbQ9t5uk7EIDMqUdsClEpY4-Tw08VACAXoBSdXEwadSzEH2MZfUw/exec`,
        data,
        headers: { 'Content-Type': 'text/plain' },
        method: 'post',
      })
        .then((res) => {
          setSaving(false);
          console.log('Raw result', res);
          //console.log('Result DATA', res.data);
          setTableData(JSON.parse(res.data));
        })
        .catch((e) => {
          setSaving(false);
          console.log(e);
        });
    }
  }
  return (
    <>
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h3>Choose your option</h3>
          </div>
          <div>
            <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
              <div>
                <p>We&apos;ll analyse it from your point of view! - 1</p>
              </div>
              <div>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    name="pov1-radio-groups"
                    value={data.pov1}
                    onChange={onPov1Change}
                  >
                    <FormControlLabel
                      value="I want to see returns (IRR) at a particular price and business plan"
                      control={<Radio classes={{
                        checked: classes.radio,
                      }} />}
                      label="I want to see returns (IRR) at a particular price and business plan" />
                    <FormControlLabel
                      value="I want to value the asset (NPV) basis a business plan and discount rate or desired return"
                      control={<Radio classes={{
                        checked: classes.radio,
                      }} />}
                      label="I want to value the asset (NPV) basis a business plan and discount rate or desired return" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          <br />
          <div>
            <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
              <div>
                <p>We&apos;ll analyse it from your point of view! - 2</p>
              </div>
              <div>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    name="pov2-radio-groups"
                    value={data.pov2}
                    onChange={handlePov2Change}
                  >
                    {pov2.map((item, index) => (
                      <FormControlLabel
                        key={index}
                        value={item}
                        checked={data.pov2 == item}
                        control={<Radio classes={{
                          checked: classes.radio,
                        }} />}
                        label={item} >
                      </FormControlLabel>
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          <br />
          <div>
            <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
              <div>
                <p>Would you like to evaluate your project in INR mn or INR crore?</p>
              </div>
              <div>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    name="currency-radio-groups"
                    value={data.eval_mn_crore}
                    onChange={handleCurrency}
                  >
                    <FormControlLabel
                      value="INR crore"
                      control={<Radio classes={{
                        checked: classes.radio,
                      }} />}
                      label="INR crore" />
                    <FormControlLabel
                      value="INR mn"
                      control={<Radio classes={{
                        checked: classes.radio,
                      }} />}
                      label="INR mn" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className="title">
            <h3>Land and Area</h3>
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>How big is the land parcel?</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="land_parcel"
              labelText="Acres"
              formControlProps={{
                fullWidth: true,
                error: error["land_parcel"],
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>whats the cost of your land (we&apos;re assuming upfront payment!)</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="cost_of_land"
              labelText={data.eval_mn_crore + " per acre"}
              formControlProps={{
                fullWidth: true,
                error: error["cost_of_land"]
              }}
            />
          </div>
          {data.pov2 == "I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer" ||
            data.pov2 == "I am buying the land as a financial investor and will do a Revenue Share JDA with a developer" ?
            <div className="cont"
              style={{ width: "100%", justifyContent: "space-between", alignItems: "flex-end", display: "flex" }}
            >
              <div>
                <p>LO Share</p>
              </div>
              <CustomInput
                id="float"
                parentCallback={onCustomInputChange}
                name="LO_share"
                labelText="% of revenue"
                formControlProps={{
                  fullWidth: true,
                  error: error["LO_share"]
                }}
              />
            </div>
            : <></>}
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>how much leasable area in the project?</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="leasable_area_project"
              labelText="square feet"
              formControlProps={{
                fullWidth: true,
                error: error["leasable_area_project"]
              }}
            />
          </div>
        </div>
        <div className={classes.container}>
          <div className="title">
            <h3>Revenue</h3>
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>At what rate will you lease the inventory</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="rate_to_lease_inv"
              labelText="INR / sft / month"
              formControlProps={{
                fullWidth: true,
                error: error["rate_to_lease_inv"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>Would you like to assume any quarterly escalation?</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="quarterly_escalation"
              labelText="%"
              formControlProps={{
                fullWidth: true,
                error: error["quarterly_escalation"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>If you want to add some CAM margin profit (calculated on leased area)</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="CAM_margin_profit"
              labelText="INR / sft / month"
              formControlProps={{
                fullWidth: true,
                error: error["CAM_margin_profit"]
              }}
            />
          </div>
        </div>
        <div className={classes.container}>
          <div className="title">
            <h3>Costs</h3>
          </div>
          <br />
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
            <div>
              <p>Would you like to calculate construction cost on saleable area or add a separate construction area / built up area</p>
            </div>
            <div>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="gender"
                  name="saleable-area-or-built-up"
                  value={data.saleable_area_or_built_up}
                  onChange={saleBuiltChange}
                >
                  <FormControlLabel
                    value="Saleable Area"
                    control={<Radio classes={{
                      checked: classes.radio,
                    }} />}
                    label="Saleable Area" />
                  <FormControlLabel
                    value="Built Up Area"
                    control={<Radio classes={{
                      checked: classes.radio,
                    }} />}
                    label="Built Up Area" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          {data.saleable_area_or_built_up == "Built Up Area" ?
            <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <p>How much built up area in the project?</p>
              </div>
              <CustomInput
                id="float"
                parentCallback={onCustomInputChange}
                name="builtup_area_project"
                labelText=""
                formControlProps={{
                  fullWidth: true,
                  error: error["builtup_area_project"]
                }}
              />
            </div>
            : <></>}
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>What&apos;s your cons cost estimate?</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="cons_cost_estimate"
              labelText=""
              formControlProps={{
                fullWidth: true,
                error: error["cons_cost_estimate"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>Would you like to assume any quarterly escalation in cons cost?</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="quarterly_escalation_cons_cost"
              labelText="%"
              formControlProps={{
                fullWidth: true,
                error: error["quarterly_escalation_cons_cost"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>How many months brokerage upon lease</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="brokerage"
              labelText=""
              formControlProps={{
                fullWidth: true,
                error: error["brokerage"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>Load up any upfront costs u may incur! (example - approval costs)</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="upfront_costs"
              labelText={data.eval_mn_crore}
              formControlProps={{
                fullWidth: true,
                error: error["upfront_costs"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>Load up any other costs u want to! (spread equally over duration of cons)</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="other_costs"
              labelText={data.eval_mn_crore}
              formControlProps={{
                fullWidth: true,
                error: error["other_costs"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>Load up any other operational costs u want to! (post completion on total area)</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="operational_cost"
              labelText="INR / sft / month"
              formControlProps={{
                fullWidth: true,
                error: error["operational_cost"]
              }}
            />
          </div>
        </div>
        <div className={classes.container}>
          <div className="title">
            <h3>Revenue</h3>
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>After how many quarters of buying land will project be launched?</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="quarters_to_launch_project"
              labelText=""
              formControlProps={{
                fullWidth: true,
                error: error["quarters_to_launch_project"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>In how many quarters will construction be completed?</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="quarters_to_complete_consturction"
              labelText=""
              formControlProps={{
                fullWidth: true,
                error: error["quarters_to_complete_consturction"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>What % of leasable area would be preleased at completion</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="leasable_area"
              labelText="%"
              formControlProps={{
                fullWidth: true,
                error: error["leasable_area"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>Peak lease (at which you will exit asset)</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="peak_lease"
              labelText="%"
              formControlProps={{
                fullWidth: true,
                error: error["peak_lease"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>In how many quarters post completion will peak lease be achieved</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="post_peak_lease"
              labelText=""
              formControlProps={{
                fullWidth: true,
                error: error["post_peak_lease"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>After how many quarters of peak lease will asset exit at peak</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="asset_exit_peak"
              labelText=""
              formControlProps={{
                fullWidth: true,
                error: error["asset_exit_peak"]
              }}
            />
          </div>
        </div>
        <div className={classes.container}>
          <div className="title">

            <h3>Debt</h3>

          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>Construction Finance Limit (Only Int Payout till LRD)</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="construction_finance_lim"
              labelText="% of Construction Cost"
              formControlProps={{
                fullWidth: true,
                error: error["construction_finance_lim"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>Construction Finance Cost</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="construction_finance_cost"
              labelText="%"
              formControlProps={{
                fullWidth: true,
                error: error["construction_finance_cost"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>LRD Cost</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="LRD_cost"
              labelText="%"
              formControlProps={{
                fullWidth: true,
                error: error["LRD_cost"]
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>LRD Principal Amortisation</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="LRD_principal_amortisation"
              labelText="Years"
              formControlProps={{
                fullWidth: true,
                error: error["LRD_principal_amortisation"]
              }}
            />
          </div>
        </div>
        <div className={classes.container}>
          <div className="title">
            <h3>Others</h3>
          </div>

          {data.pov1 == "I want to value the asset (NPV) basis a business plan and discount rate or desired return" ?
            <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <p>Desired return or Discount rate</p>
              </div>
              <CustomInput
                id="float"
                parentCallback={onCustomInputChange}
                name="desired_return"
                labelText="%"
                formControlProps={{
                  fullWidth: true,
                  error: error["desired_return"]
                }}
              />
            </div> : <></>
          }
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p>Exit Cap Rate</p>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="exit_cap_rate"
              labelText="%"
              formControlProps={{
                fullWidth: true,
                error: error["exit_cap_rate"]
              }}
            />
          </div>
        </div>
        <div className={classes.container}>
          <div style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: "1rem" }}>
            <Button type="button" color="primary" onClick={handleSubmit}>
              {isSaving ? (
                <div
                  style={{
                    'animationDuration': '1s',
                    'animationIterationCount': 'infinite',
                  }}
                >
                  Loading
                  <Icon>sync</ Icon>
                </div>
              ) : (
                'Submit'
              )}
            </Button>
          </div>
        </div>
        <div className={classes.container}>
          <div>
            <BuildLeaseTable data={tableData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BuildLease

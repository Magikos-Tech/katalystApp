import React from "react"
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button"
import "./BuildLease.css";

const useStyles = makeStyles(styles);
import { useState } from "react";
import axios from "axios";
import BuildLeaseTable from "./BuildLeaseTable";
import { Icon } from "@material-ui/core";
const BuildLease = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    pov1: "I want to see returns (IRR) at a particular price and business plan",
    pov2: "I am buying the land and developing the project myself",
    eval_mn_crore: "INR crore", land_parcel: "", cost_of_land: "", LO_share: "", leasable_area_project: "",
    quarterly_escalation: "", CAM_margin_profit: "", saleable_area_or_built_up: "Saleable Area",
    builtup_area_project: "", cons_cost_estimate: "", quarterly_escalation_cons_cost: "", brokerage: "",
    upfront_costs: "", other_costs: "", operational_cost: "", quarters_to_launch_project: "",
    quarters_to_complete_consturction: "", leasable_area: "", peak_lease: "",
    post_peak_lease: "", asset_exit_peak: "",
    construction_finance_lim: "", construction_finance_cost: "", LRD_cost: "", LRD_principal_amortisation: "",
    desired_return: "", exit_cap_rate: ""
  })

  const [pov2, setPov2] = useState([
    "I am buying the land and developing the project myself",
    "I am buying the land as a financial investor and will do a Revenue Share JDA with a developer"
  ])

  const onPov1Change = (e) => {
    const value = e.target.value;
    let selectedPov2 = "";
    if (value === "I want to see returns (IRR) at a particular price and business plan") {
      const pov2Data = [
        "I am buying the land and developing the project myself",
        "I am buying the land as a financial investor and will do a Revenue Share JDA with a developer"
      ]
      selectedPov2 = pov2Data[0];
      setPov2(pov2Data);
    } else {
      const pov2Data = [
        "I want to value the asset basis the total project free cashflows",
        "I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer"
      ]
      selectedPov2 = pov2Data[0];
      setPov2(pov2Data);
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
    setData({ ...data, [name]: value });
  }

  const saleBuiltChange = (e) => {
    const value = e.target.value;
    setData({ ...data, saleable_area_or_built_up: value });
  }

  const [tableData, setTableData] = useState(null);
  const [isSaving, setSaving] = useState(false);

  const handleSubmit = (e) => {
    setTableData(null);
    setSaving(true);
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
    console.log(data);
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
                <h5>We&apos;ll analyse it from your point of view! - 1</h5>
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
                <h5>We&apos;ll analyse it from your point of view! - 2</h5>
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
                <h5>Would you like to evaluate your project in INR mn or INR crore?</h5>
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
              <h5>How big is the land parcel?</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="land_parcel"
              labelText="Acres"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>whats the cost of your land (we&apos;re assuming upfront payment!)</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="cost_of_land"
              labelText={data.eval_mn_crore + " per acre"}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          {data.pov2 == "I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer" ||
            data.pov2 == "I am buying the land as a financial investor and will do a Revenue Share JDA with a developer" ?
            <div className="cont"
              style={{ width: "100%", justifyContent: "space-between", alignItems: "flex-end", display: "flex" }}
            >
              <div>
                <h5>LO Share</h5>
              </div>
              <CustomInput
                id="float"
                parentCallback={onCustomInputChange}
                name="LO_share"
                labelText="% of revenue"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </div>
            : <></>}
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>how much leasable area in the project?</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="leasable_area_project"
              labelText="square feet"
              formControlProps={{
                fullWidth: true,
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
              <h5>At what rate will you lease the inventory</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="rate_to_lease_inv"
              labelText="INR / sft / month"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>Would you like to assume any quarterly escalation?</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="quarterly_escalation"
              labelText="%"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>If you want to add some CAM margin profit (calculated on leased area)</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="CAM_margin_profit"
              labelText="INR / sft / month"
              formControlProps={{
                fullWidth: true,
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
              <h5>Would you like to calculate construction cost on saleable area or add a separate construction area / built up area</h5>
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
                <h5>How much built up area in the project?</h5>
              </div>
              <CustomInput
                id="float"
                parentCallback={onCustomInputChange}
                name="builtup_area_project"
                labelText=""
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </div>
            : <></>}
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>What&apos;s your cons cost estimate?</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="cons_cost_estimate"
              labelText=""
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>Would you like to assume any quarterly escalation in cons cost?</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="quarterly_escalation_cons_cost"
              labelText="%"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>How many months brokerage upon lease</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="brokerage"
              labelText=""
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>Load up any upfront costs u may incur! (example - approval costs)</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="upfront_costs"
              labelText={data.eval_mn_crore}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>Load up any other costs u want to! (spread equally over duration of cons)</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="other_costs"
              labelText={data.eval_mn_crore}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>Load up any other operational costs u want to! (post completion on total area)</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="operational_cost"
              labelText="INR / sft / month"
              formControlProps={{
                fullWidth: true,
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
              <h5>After how many quarters of buying land will project be launched?</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="quarters_to_launch_project"
              labelText=""
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>In how many quarters will construction be completed?</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="quarters_to_complete_consturction"
              labelText=""
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>What % of leasable area would be preleased at completion</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="leasable_area"
              labelText="%"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>Peak lease (at which you will exit asset)</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="peak_lease"
              labelText="%"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>In how many quarters post completion will peak lease be achieved</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="post_peak_lease"
              labelText=""
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>After how many quarters of peak lease will asset exit at peak</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="asset_exit_peak"
              labelText=""
              formControlProps={{
                fullWidth: true,
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
              <h5>Construction Finance Limit (Only Int Payout till LRD)</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="construction_finance_lim"
              labelText="% of Construction Cost"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>Construction Finance Cost</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="construction_finance_cost"
              labelText="%"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>LRD Cost</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="LRD_cost"
              labelText="%"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </div>
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>LRD Principal Amortisation</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="LRD_principal_amortisation"
              labelText="Years"
              formControlProps={{
                fullWidth: true,
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
                <h5>Desired return or Discount rate</h5>
              </div>
              <CustomInput
                id="float"
                parentCallback={onCustomInputChange}
                name="desired_return"
                labelText="%"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </div> : <></>
          }
          <div className="cont" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <h5>Exit Cap Rate</h5>
            </div>
            <CustomInput
              id="float"
              parentCallback={onCustomInputChange}
              name="exit_cap_rate"
              labelText="%"
              formControlProps={{
                fullWidth: true,
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

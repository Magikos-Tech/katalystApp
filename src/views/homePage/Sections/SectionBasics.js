import React from 'react';
import axios from 'axios';
import Icon from '@material-ui/core/Icon';

// import request from 'request';
import TableDisp from '../table.js';
import Primary from 'components/Typography/Primary.js';
// plugin that creates slider
// import Slider from 'nouislider';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Radio from '@material-ui/core/Radio';
// import Switch from '@material-ui/core/Switch';
// @material-ui/icons
import PersonIcon from '@material-ui/icons/Person';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
// import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
// core components
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
// import CustomLinearProgress from 'components/CustomLinearProgress/CustomLinearProgress.js';
// import Paginations from 'components/Pagination/Pagination.js';
// import Badge from 'components/Badge/Badg3e.js';

import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { useState } from 'react';
// import DropdownStyle from './home-page-style.js';

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();

  const [data, setData] = useState({
    email: '',
    description: '',
    pov1: '',
    pov2: '',
    res_comm_both: '',
    eval_mn_crore: '',
    land_parcel: '',
    cost_of_land: '',
    saleable_area_res: '',
    inc_sale_price_res: '',
    quarterly_escalation_res: '', //%
    saleable_area: '',
    inc_sale_price: '',
    quarterly_escalation: '', //%
    built_up_area: '',
    total_built_up_area: '',
    cost_estimate: '',
    quarterly_escalation_con: '',
    brokerage: '', //%
    upfront_costs: '',
    other_costs: '', //%
    other_costs_over_duration: '',
    quarters_to_land_project: '',
    quarters_to_complete_construction: '',
    quarters_to_sell_res: '',
    quarters_to_sell_comm: '',
    desired_return: '', //%
  });

  const [error, setError] = useState({
    email: false,
    description: false,
    pov1: false,
    pov2: false,
    res_comm_both: false,
    eval_mn_crore: false,
    land_parcel: false,
    cost_of_land: false,
    saleable_area_res: false,
    inc_sale_price_res: false,
    quarterly_escalation_res: false, //%
    saleable_area: false,
    inc_sale_price: false,
    quarterly_escalation: false, //%
    built_up_area: false,
    total_built_up_area: false,
    cost_estimate: false,
    quarterly_escalation_con: false,
    brokerage: false, //%
    upfront_costs: false,
    other_costs: false, //%
    other_costs_over_duration: false,
    quarters_to_land_project: false,
    quarters_to_complete_construction: false,
    quarters_to_sell_res: false,
    quarters_to_sell_comm: false,
    desired_return: false, //%
  });

  const [tableData, setTableData] = useState(null);
  const [isSaving, setSaving] = useState(false);
  // const { emailId } = data;

  // const onChange = (e) => {
  //   console.log('Event');
  //   console.log(e.target.value);
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  function isNumber(str) {
    if (typeof str != "string") return false // we only process strings!
    // could also coerce to string: str = ""+str
    return !isNaN(str) && !isNaN(parseFloat(str))
  }

  function verfiyEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const onChange = (obj) => {
    // console.log(obj);
    const { name, value } = obj;
    if (name == "email") {
      if (value == "" || !verfiyEmail(value)) error[name] = true;
      else error[name] = false;
    } else if (name == "description") {
      if (value == "") error[name] = true;
      else error[name] = false;
    } else {
      if (value == "" || !isNumber(value)) error[name] = true;
      else error[name] = false
    }
    setData({ ...data, [name]: value });
    setError({ ...error });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Submitted Data:', data);
    const dataKeys = Object.keys(data);
    if (data.res_comm_both == 'Residential') {
      dataKeys.forEach((e) => {
        if (e === 'quarterly_escalation_con' && !data[e].includes('%'))
          data[e] = data[e] + '%';
        if (e === 'quarterly_escalation_res' && !data[e].includes('%'))
          data[e] = data[e] + '%';
        // if (e === 'quarterly_escalation' && !data[e].includes('%'))
        //   data[e] = data[e] + '%';
        if (e === 'brokerage' && !data[e].includes('%'))
          data[e] = data[e] + '%';
        if (e === 'other_costs' && !data[e].includes('%'))
          data[e] = data[e] + '%';
        if (e === 'desired_return' && !data[e].includes('%'))
          data[e] = data[e] + '%';
      });

      data.saleable_area = '';
      data.inc_sale_price = '';
      data.quarterly_escalation = '';
    }
    if (data.res_comm_both == 'Commercial') {
      dataKeys.forEach((e) => {
        if (e === 'quarterly_escalation_con' && !data[e].includes('%'))
          data[e] = data[e] + '%';
        // if (e === 'quarterly_escalation_res' && !data[e].includes('%'))
        //   data[e] = data[e] + '%';
        if (e === 'quarterly_escalation' && !data[e].includes('%'))
          data[e] = data[e] + '%';
        if (e === 'brokerage' && !data[e].includes('%'))
          data[e] = data[e] + '%';
        if (e === 'other_costs' && !data[e].includes('%'))
          data[e] = data[e] + '%';
        if (e === 'desired_return' && !data[e].includes('%'))
          data[e] = data[e] + '%';
      });

      data.saleable_area_res = '';
      data.inc_sale_price_res = '';
      data.quarterly_escalation_res = '';
    }
    if (data.res_comm_both == 'Residential with Commercial Component') {
      dataKeys.forEach((e) => {
        if (e === 'quarterly_escalation_con' && !data[e].includes('%'))
          data[e] = data[e] + '%';
        if (e === 'quarterly_escalation_res' && !data[e].includes('%'))
          data[e] = data[e] + '%';
        if (e === 'quarterly_escalation' && !data[e].includes('%'))
          data[e] = data[e] + '%';
        if (e === 'brokerage' && !data[e].includes('%'))
          data[e] = data[e] + '%';
        if (e === 'other_costs' && !data[e].includes('%'))
          data[e] = data[e] + '%';
        if (e === 'desired_return' && !data[e].includes('%'))
          data[e] = data[e] + '%';
      });
    }

    console.log('Submitted Data:', data);
    let result = true;
    if (data.pov1 === "") {
      result = false;
      error["pov1"] = true;
    } else {
      if (data.pov1 === "I want to value the asset (NPV) basis a business plan and discount rate or desired return") {
        if (!isNumber(data.desired_return.replace("%", ""))) {
          result = false;
          error["desired_return"] = true;
        }
      }
    }
    if (data.pov2 === "") {
      result = false;
      error["pov2"] = true;
    }
    if (data.res_comm_both === "") {
      result = false;
      error["res_comm_both"] = true;
    } else {
      if (data.res_comm_both === "Residential" || data.res_comm_both === "Residential with Commercial Component") {
        if (!isNumber(data.saleable_area_res)) {
          result = false;
          error["saleable_area_res"] = true;
        }
        if (!isNumber(data.inc_sale_price_res)) {
          result = false;
          error["inc_sale_price_res"] = true;
        }
        if (!isNumber(data.quarterly_escalation_res.replace("%", ""))) {
          result = false;
          error["quarterly_escalation_res"] = true;
        }
        if (data.res_comm_both !== "Residential with Commercial Component") {
          data.saleable_area = "";
          data.inc_sale_price = "";
          data.quarterly_escalation = "";
        }
      }
      if (data.res_comm_both === "Commercial" || data.res_comm_both === "Residential with Commercial Component") {
        if (!isNumber(data.saleable_area)) {
          result = false;
          error["saleable_area"] = true;
        }
        if (!isNumber(data.inc_sale_price)) {
          result = false;
          error["inc_sale_price"] = true;
        }
        if (!isNumber(data.quarterly_escalation.replace("%", ""))) {
          result = false;
          error["quarterly_escalation"] = true;
        }
        if (data.res_comm_both !== "Residential with Commercial Component") {
          data.saleable_area_res = "";
          data.inc_sale_price_res = "";
          data.quarterly_escalation_res = "";
        }
      }
    }
    if (data.built_up_area === "") {
      result = false;
      error["built_up_area"] = true;
    } else {
      if (data.built_up_area === "Built Up Area") {
        if (!isNumber(data.total_built_up_area)) {
          result = false;
          error["total_built_up_area"] = true;
        }
      }
    }
    if (!verfiyEmail(data.email)) {
      result = false;
      error["email"] = true;
    }
    if (data.description === "") {
      result = false;
      error["description"] = true;
    }
    if (data.eval_mn_crore === "") {
      result = false;
      error["eval_mn_crore"] = true;
    }
    if (!isNumber(data.land_parcel)) {
      result = false;
      error["land_parcel"] = true;
    }
    if (!isNumber(data.cost_of_land)) {
      result = false;
      error["cost_of_land"] = true;
    }
    if (!isNumber(data.cost_estimate)) {
      result = false;
      error["cost_estimate"] = true;
    }
    if (!isNumber(data.quarterly_escalation_con.replace("%", ""))) {
      result = false;
      error["quarterly_escalation_con"] = true;
    }
    if (!isNumber(data.brokerage.replace("%", ""))) {
      result = false;
      error["brokerage"] = true;
    }
    if (!isNumber(data.upfront_costs)) {
      result = false;
      error["upfront_costs"] = true;
    }
    if (!isNumber(data.other_costs.replace("%", ""))) {
      result = false;
      error["other_costs"] = true;
    }
    if (!isNumber(data.other_costs_over_duration)) {
      result = false;
      error["other_costs_over_duration"] = true;
    }
    if (!isNumber(data.quarters_to_land_project)) {
      result = false;
      error["quarters_to_land_project"] = true;
    }
    if (!isNumber(data.quarters_to_complete_construction)) {
      result = false;
      error["quarters_to_complete_construction"] = true;
    }
    setError({ ...error });
    setSaving(result);
    if (result) {
      axios({
        url: `https://script.google.com/macros/s/AKfycbw_2GIZsjao_JjiPcTmP6Yirpxbaolbr1T5UBH87swMNXOIZlBt-MmGURKaPCxupP2A/exec`,
        data,
        headers: { 'Content-Type': 'text/plain' },
        method: 'post',
      })
        .then((res) => {
          console.log('Raw result', res);
          console.log('Result DATA', res.data);

          setTableData(JSON.parse(res.data));
          setSaving(false);
        })
        .catch((e) => {
          console.log(e);
          setSaving(false);
        });
    }
  };

  // const commOrResObj = { 1: 'Residential', 2: 'Commercial', 3: 'Res&Com' };
  const [commOrRes, setCommOrRes] = useState(0);
  const onDropDownClick = (e) => {
    const name = 'res_comm_both';
    if (e == 'Residential') {
      setCommOrRes(1);
      setData({ ...data, [name]: e });
    }
    if (e == 'Commercial') {
      setCommOrRes(2);
      setData({ ...data, [name]: e });
    }
    if (e == 'Residential with Commercial Component') {
      setCommOrRes(3);
      setData({ ...data, [name]: e });
    }
    setError({ ...error, [name]: false });
  };

  const [dropdownValue, setDropdown] = useState(0);
  const dependableDropdown = (e) => {
    if (
      e == 'I want to see returns (IRR) at a particular price and business plan'
    ) {
      setDropdown(1);
      const name = 'pov1';
      const value =
        'I want to see returns (IRR) at a particular price and business plan';
      setData({ ...data, [name]: value });
      setError({ ...error, [name]: false })
    }
    if (
      e ==
      'I want to value the asset (NPV) basis a business plan and discount rate or desired return'
    ) {
      setDropdown(2);
      const name = 'pov1';
      const value =
        'I want to value the asset (NPV) basis a business plan and discount rate or desired return';
      setData({ ...data, [name]: value });
      setError({ ...error, [name]: false })
    }
  };

  const [pov2, setpov2] = useState(0);
  const dropdownPov2 = (e) => {
    const name = 'pov2';

    if (e == 'I am buying the land and developing the project myself') {
      setpov2(1);
      const value = 'I am buying the land and developing the project myself';
      setData({ ...data, [name]: value });
    }
    if (
      e ==
      'I am buying the land as a financial investor and will do a Revenue Share JDA with a developer'
    ) {
      setpov2(2);
      const value =
        'I am buying the land as a financial investor and will do a Revenue Share JDA with a developer';
      setData({ ...data, [name]: value });
    }
    if (
      e == 'I want to value the asset basis the total project free cashflows'
    ) {
      setpov2(3);
      const value =
        'I want to value the asset basis the total project free cashflows';
      setData({ ...data, [name]: value });
    }
    if (
      e ==
      'I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer'
    ) {
      setpov2(4);
      const value =
        'I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer';
      setData({ ...data, [name]: value });
    }
    setError({ ...error, [name]: false })
  };

  const [currency, setCurrency] = useState(0);
  const currencySelect = (e) => {
    const name = 'eval_mn_crore';
    setData({ ...data, [name]: e });

    if (e == 'INR mn') {
      setCurrency(1);
    }
    if (e == 'INR Crore') {
      setCurrency(2);
    }
    setError({ ...error, [name]: false });
  };

  const [builtupSaleable, setbuiltupOrSaleable] = useState(0);
  const builtupOrSaleable = (e) => {
    const name = 'built_up_area';
    setData({ ...data, [name]: e });

    if (e == 'Built Up Area') {
      setbuiltupOrSaleable(1);
    }
    if (e == 'Saleable Area') {
      setbuiltupOrSaleable(2);
    }
    setError({ ...error, [name]: false })
  };

  const innerStyles = {
    dropdownStyle: {
      marginLeft: '0rem',
    },
  };


  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Personal Information</h3>
        </div>
        <div id='email'>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end" }}>
            <GridItem xs={12} sm={12} md={6}>
              <p>
                Your email address
              </p>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                parentCallback={onChange}
                labelText=''
                name='email'
                id='float'
                formControlProps={{
                  fullWidth: true,
                  error: error["email"]
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <AlternateEmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </GridItem>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end" }}>
            <GridItem xs={12} sm={12} md={6}>
              <p>
                Tell us about yourself!
              </p>
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText=''
                id='float'
                name='description'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error["description"]
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </GridItem>
          </div>
        </div>
        <div className={classes.space50} />
        <div>
          <div className={classes.title}>
            <h3>Choose your options</h3>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", padding: "0 1rem 2rem 1rem" }}>
              <h5>We&apos;ll analyse it from your point of view! - 1 </h5>
              <div style={{ width: "300px" }}>
                <div style={innerStyles.dropdownStyle}>
                  <CustomDropdown
                    buttonText='Select'
                    customButtonStyle={{
                      backgroundColor: '#e9ecef',
                      color: '#212529',
                      width: "100%"
                    }}
                    dropdownList={[
                      { divider: true },
                      'I want to see returns (IRR) at a particular price and business plan',
                      { divider: true },
                      'I want to value the asset (NPV) basis a business plan and discount rate or desired return',
                    ]}
                    onClick={dependableDropdown}
                  />
                </div>
                <div>
                  {dropdownValue === 1 ? (
                    <Primary>
                      I want to see returns (IRR) at a particular price and business
                      plan
                    </Primary>
                  ) : (
                    <></>
                  )}
                  {dropdownValue === 2 ? (
                    <Primary>
                      I want to value the asset (NPV) basis a business plan and
                      discount rate or desired return
                    </Primary>
                  ) : (
                    <></>
                  )}
                </div>
                {error["pov1"] ? <p style={{ color: "red" }}>This is required.</p> : <></>}
              </div>
            </div>
          </div>
          <div className='dropdown'>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", padding: "0 1rem 2rem 1rem" }}>
              <h5>We&apos;ll analyse it from your point of view! - 2</h5>
              <div style={{ width: "300px" }}>
                <div style={innerStyles.dropdownStyle}>
                  <CustomDropdown
                    customButtonStyle={{
                      backgroundColor: '#e9ecef',
                      color: '#212529',
                      width: "100%"
                    }}
                    buttonText='Select'
                    onClick={dropdownPov2}
                    dropdownList={
                      dropdownValue == 1
                        ? [
                          { divider: true },
                          'I am buying the land and developing the project myself',
                          { divider: true },
                          'I am buying the land as a financial investor and will do a Revenue Share JDA with a developer',
                        ]
                        : [
                          { divider: true },
                          'I want to value the asset basis the total project free cashflows',
                          { divider: true },
                          'I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer',
                        ]
                    }
                  />
                </div>
                <div>
                  {pov2 === 1 ? (
                    <Primary>
                      I am buying the land and developing the project myself
                    </Primary>
                  ) : (
                    <></>
                  )}
                  {pov2 === 2 ? (
                    <Primary>
                      I am buying the land as a financial investor and will do a
                      Revenue Share JDA with a developer
                    </Primary>
                  ) : (
                    <></>
                  )}
                  {pov2 === 3 ? (
                    <Primary>
                      I want to value the asset basis the total project free
                      cashflows
                    </Primary>
                  ) : (
                    <></>
                  )}
                  {pov2 === 4 ? (
                    <Primary>
                      I want to value the asset basis land owners share of cashflows
                      in a Revenue Share JDA with a developer
                    </Primary>
                  ) : (
                    <></>
                  )}
                </div>
                {error["pov2"] ? <p style={{ color: "red" }}>This is required</p> : <></>}
              </div>
            </div>
          </div>
          <div className='dropdown'>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", padding: "0 1rem 2rem 1rem" }}>
              <h5>
                Is it residential or commercial or residential with commercial
                component?
              </h5>
              <div style={{ width: "300px" }}>
                <div style={innerStyles.dropdownStyle}>
                  <CustomDropdown
                    customButtonStyle={{
                      backgroundColor: '#e9ecef',
                      color: '#212529',
                      width: "100%"
                    }}
                    onClick={onDropDownClick}
                    buttonText='Select'
                    // buttonText={
                    //   commOrResObj[commOrRes]
                    //     ? `${commOrResObj[commOrRes].slice(0, 6)}..`
                    //     : 'Select'
                    // }
                    dropdownList={[
                      { divider: true },
                      'Residential',
                      { divider: true },
                      'Commercial',
                      { divider: true },
                      'Residential with Commercial Component',
                    ]}
                  />
                </div>
                <div>
                  {commOrRes === 1 ? <Primary>Residential</Primary> : <></>}
                  {commOrRes === 2 ? <Primary>Commercial</Primary> : <></>}
                  {commOrRes === 3 ? (
                    <Primary>Residential with Commercial Component</Primary>
                  ) : (
                    <></>
                  )}
                </div>
                {error["res_comm_both"] ? <p style={{ color: "red" }}>This is required</p> : <></>}
              </div>
            </div>
          </div>
          <div className='dropdown'>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", padding: "0 1rem 2rem 1rem" }}>
              <h5>
                Would you like to evaluate your project in INR mn or INR crore?
              </h5>
              <div style={{ width: "300px" }}>
                <div style={innerStyles.dropdownStyle}>
                  <CustomDropdown
                    customButtonStyle={{
                      backgroundColor: '#e9ecef',
                      color: '#212529',
                      width: "100%"
                    }}
                    buttonText='Select'
                    onClick={currencySelect}
                    dropdownList={[
                      { divider: true },
                      'INR mn',
                      { divider: true },
                      'INR Crore',
                    ]}
                  />
                </div>
                <div>
                  {currency === 1 ? <Primary>INR mn</Primary> : <></>}
                  {currency === 2 ? <Primary>INR Crore</Primary> : <></>}
                </div>
                {error["eval_mn_crore"] ? <p style={{ color: "red" }}>This is required</p> : <></>}
              </div>
            </div>
          </div>
        </div>

        <div className={classes.space30} />
        <div id='Section2'>
          <div className={classes.title}>
            <h3>Assumption</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end" }}>
            <GridItem xs={12} sm={12} md={6}>
              <p>
                How big is the land parcel?
              </p>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                parentCallback={onChange}
                id='float'
                name='land_parcel'
                labelText='acres'
                formControlProps={{
                  fullWidth: true,
                  error: error["land_parcel"]
                }}
              />
            </GridItem>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end" }}>
            <GridItem xs={12} sm={12} md={6}>
              <p>
                Whats the cost of your land (we&apos;re assuming upfront
                payment!)
              </p>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                parentCallback={onChange}
                labelText={
                  currency == '1' ? 'INR MN per acre' : 'INR Crore per acre'
                }
                id='float'
                name='cost_of_land'
                formControlProps={{
                  fullWidth: true,
                  error: error["cost_of_land"]
                }}
              />
            </GridItem>
          </div>
        </div>

        {commOrRes === 1 || commOrRes === 3 ? (
          <div>
            <div className={classes.title}>
              <h3>Residential</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end" }}>
              <GridItem xs={12} sm={12} md={6}>
                <p>
                  How much saleable area in the project?
                </p>
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='square feet'
                  id='float'
                  name='saleable_area_res'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error["saleable_area_res"]
                  }}
                />
              </GridItem>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end" }}>
              <GridItem xs={12} sm={12} md={6}>
                <p>
                  What&apos;s your all inclusive sales price?
                </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='INR / sft'
                  id='float'
                  name='inc_sale_price_res'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error["inc_sale_price_res"]
                  }}
                />
              </GridItem>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end" }}>
              <GridItem xs={12} sm={12} md={6}>
                <p>
                  Would you like to assume any quarterly escalation?
                </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='%(Percentage)'
                  id='float'
                  name='quarterly_escalation_res'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error["quarterly_escalation_res"]
                  }}
                />
              </GridItem>
            </div>
          </div>
        ) : (
          <></>
        )}

        {commOrRes === 2 || commOrRes === 3 ? (
          <div>
            <div className={classes.title}>
              <h3>Commercial</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end" }}>
              <GridItem xs={12} sm={12} md={6}>
                <p>
                  How much saleable area in the project?
                </p>
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='square feet'
                  id='float'
                  name='saleable_area'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error["saleable_area"]
                  }}
                />
              </GridItem>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end" }}>
              <GridItem xs={12} sm={12} md={6}>
                <p>
                  Whats your all inclusive sales price?
                </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='INR / sft'
                  id='float'
                  name='inc_sale_price'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error["inc_sale_price"]
                  }}
                />
              </GridItem>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end" }}>
              <GridItem xs={12} sm={12} md={6}>
                <p>
                  Would you like to assume any quarterly escalation?
                </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='%(Percentage)'
                  id='float'
                  name='quarterly_escalation'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error["quarterly_escalation"]
                  }}
                />
              </GridItem>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div>
          <div className={classes.title}>
            <h3>Cost</h3>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", padding: "0 1rem 2rem 1rem" }}>
              <h5 style={{ width: "400px" }}>
                Would you like to calculate construction cost on saleable area
                or add a separate construction area / built up area
              </h5>
              <div style={{ width: "300px" }}>
                <div style={innerStyles.dropdownStyle}>
                  <CustomDropdown
                    buttonText='Select'
                    customButtonStyle={{
                      backgroundColor: '#e9ecef',
                      color: '#212529',
                      width: "100%"
                    }}
                    onClick={builtupOrSaleable}
                    dropdownList={[
                      { divider: true },
                      'Built Up Area',
                      { divider: true },
                      'Saleable Area',
                    ]}
                  />
                </div>
                <div>
                  {builtupSaleable === 1 ? <Primary>Built Up Area</Primary> : <></>}
                  {builtupSaleable === 2 ? <Primary>Saleable Area</Primary> : <></>}
                  {error["built_up_area"] ? <p style={{ color: "red" }}>This is required</p> : <></>}
                </div>
              </div>
            </div>
          </div>

          {builtupSaleable == 1 && builtupSaleable !== 2 ? (
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end", padding: "0 0rem 2rem 0rem" }}>
              <GridItem xs={12} sm={12} md={6}>
                <p>
                  how much built up area in the project?
                </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='square feet'
                  id='float'
                  name='total_built_up_area'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error["total_built_up_area"]
                  }}
                />
              </GridItem>
            </div>
          ) : (
            <></>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end", padding: "0 0rem 2rem 0rem" }}>
            <GridItem xs={12} sm={12} md={6}>
              <p>
                What&apos;s your cons cost estimate?
              </p>
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText='INR / sft'
                id='float'
                name='cost_estimate'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error["cost_estimate"]
                }}
              />
            </GridItem>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end", padding: "0 0rem 2rem 0rem" }}>
            <GridItem xs={12} sm={12} md={6}>
              <p>
                Would you like to assume any quarterly escalation in cons cost?
              </p>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText='%(percentage)'
                id='float'
                name='quarterly_escalation_con'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error["quarterly_escalation_con"]
                }}
              />
            </GridItem>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end", padding: "0 0rem 2rem 0rem" }}>
            <GridItem xs={12} sm={12} md={6}>
              <p>
                What % brokerage will you pay?
              </p>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText='%(percentage)of sales'
                id='float'
                name='brokerage'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error["brokerage"]
                }}
              />
            </GridItem>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end", padding: "0 0rem 2rem 0rem" }}>
            <GridItem xs={12} sm={12} md={6}>
              <p>
                Load up any upfront costs you may incur! (example - approval
                costs)
              </p>
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText={currency == '1' ? 'INR MN' : 'INR Crore'}
                id='float'
                name='upfront_costs'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error["upfront_costs"]
                }}
              />
            </GridItem>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end", padding: "0 0rem 2rem 0rem" }}>
            <GridItem xs={12} sm={12} md={6}>
              <p>
                Load up any other costs you want to!
              </p>
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText='% of collections'
                id='float'
                name='other_costs'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error["other_costs"]
                }}
              />
            </GridItem>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end", padding: "0 0rem 2rem 0rem" }}>
            <GridItem xs={12} sm={12} md={6}>
              <p>
                Load up any other costs you want to! (spread over duration of
                cons)
              </p>
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText={currency == '1' ? 'INR MN' : 'INR Crore'}
                id='float'
                name='other_costs_over_duration'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error["other_costs_over_duration"]
                }}
              />
            </GridItem>
          </div>
        </div>

        <div id='timelines'>
          <div className={classes.title}>
            <h3>Timelines</h3>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end", padding: "0 0rem 2rem 0rem" }}>
            <GridItem xs={12} sm={12} md={6}>
              <p>
                After how many quarters of buying land will project be launched?
              </p>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText=''
                id='float'
                name='quarters_to_land_project'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error["quarters_to_land_project"]
                }}
              />
            </GridItem>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end", padding: "0 0rem 2rem 0rem" }}>
            <GridItem xs={12} sm={12} md={6}>
              <p>
                In how many quarters will construction be completed?
              </p>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText=''
                id='float'
                name='quarters_to_complete_construction'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error["quarters_to_complete_construction"]
                }}
              />
            </GridItem>
          </div>
          {commOrRes === 1 || commOrRes === 3 ? (
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end", padding: "0 0rem 2rem 0rem" }}>
              <GridItem xs={12} sm={12} md={6}>
                <p>
                  In how many quarters will you sell 100% of the residential
                  inventory?
                </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText=''
                  id='float'
                  name='quarters_to_sell_res'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error["quarters_to_sell_res"]
                  }}
                />
              </GridItem>
            </div>
          ) : (
            <></>
          )}

          {commOrRes === 2 || commOrRes === 3 ? (
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end", padding: "0 0rem 2rem 0rem" }}>
              <GridItem xs={12} sm={12} md={6}>
                <p>
                  In how many quarters will you sell 100% of the commercial
                  inventory?
                </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText=''
                  id='float'
                  name='quarters_to_sell_comm'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error["quarters_to_sell_comm"]
                  }}
                />
              </GridItem>
            </div>
          ) : (
            <></>
          )}
        </div>
        {dropdownValue === 2 ? (
          <div id='other'>
            <div className={classes.title}>
              <h3>Others</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: "wrap", alignItems: "flex-end", padding: "0 0rem 2rem 0rem" }}>
              <GridItem xs={12} sm={12} md={6}>
                <p>
                  Desired return or discount rate?
                </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText='%(Percentage)'
                  id='float'
                  name='desired_return'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error["desired_return"]
                  }}
                />
              </GridItem>
            </div>{' '}
          </div>
        ) : (
          <></>
        )}

        {/*  */}

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type='button' color='primary' onClick={handleSubmit}>
            {isSaving ? (
              <div
                style={{
                  'animationDuration': '1s',
                  'animationIterationCount': 'infinite',
                }}
              >
                Loading
                <Icon>sync</Icon>
              </div>
            ) : (
              'Submit'
            )}
          </Button>
        </div>
        <div>
          <TableDisp data={tableData} />
        </div>
      </div>
    </div >
  );
}
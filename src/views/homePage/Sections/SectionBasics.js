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
import GridContainer from 'components/Grid/GridContainer.js';
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

  const [tableData, setTableData] = useState(null);
  const [isSaving, setSaving] = useState(false);
  // const { emailId } = data;

  // const onChange = (e) => {
  //   console.log('Event');
  //   console.log(e.target.value);
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  const onChange = (obj) => {
    // console.log(obj);
    const { name, value } = obj;
    setData({ ...data, [name]: value });

    // console.log('Now the data is : ', data);
  };

  const handleSubmit = (event) => {
    // console.log('Submitted Data:', data);
    setSaving(true);
    console.log(isSaving);
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
        if (e === 'desired_return' && !data[e].includes('%') && dropdownValue === 2)
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
        if (e === 'desired_return' && !data[e].includes('%')&& dropdownValue === 2)
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
        if (e === 'desired_return' && !data[e].includes('%') && dropdownValue === 2)
          data[e] = data[e] + '%';
      });
    }

    console.log('Submitted Data:', data);
    event.preventDefault();

    //1st working solution start
    // axios
    //   .post(
    //     `https://script.google.com/macros/s/AKfycbw_2GIZsjao_JjiPcTmP6Yirpxbaolbr1T5UBH87swMNXOIZlBt-MmGURKaPCxupP2A/exec`,
    //     [{ data }]
    //   )
    //   .then((res) => {
    //     // console.log(res);
    //     console.log('Result DATA', res.data);

    //     setTableData(res.data);
    //   });
    // 1st working solution end.

    //webhoook attempt
    // axios
    //   .post(
    //     `https://webhook.site/1e98ef44-3f2a-413e-8e8a-333e3c362789`,
    //   )
    //   .then((res) => {
    //     // console.log(res);
    //     console.log('Result DATA', res);
    //     setTableData(res.data);
    //   });
    //webhoook attempt end

    //content type plain
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
    //content type plain end

    // request package start
    // const options = {
    //   url:'https://script.google.com/macros/s/AKfycbw_2GIZsjao_JjiPcTmP6Yirpxbaolbr1T5UBH87swMNXOIZlBt-MmGURKaPCxupP2A/exec' ,
    //   followAllRedirects: true,
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // };
    // return new Promise(function (resolve, reject) {
    //   request(options, function (err, res, body) {
    //     if (res && (res.statusCode === 200 || res.statusCode === 201)) {
    //       resolve(body.response_data);
    //     } else {
    //       console.log(err);
    //       reject(false);
    //     }
    //   });
    // });
    //request package ends.
  };

  // const commOrResObj = { 1: 'Residential', 2: 'Commercial', 3: 'Res&Com' };
  const [commOrRes, setCommOrRes] = useState(0);
  const onDropDownClick = (e) => {
    if (e == 'Residential') {
      setCommOrRes(1);
      const name = 'res_comm_both';
      setData({ ...data, [name]: e });
      console.log(data);
    }
    if (e == 'Commercial') {
      setCommOrRes(2);
      const name = 'res_comm_both';
      setData({ ...data, [name]: e });
      console.log(data);
    }
    if (e == 'Residential with Commercial Component') {
      setCommOrRes(3);
      const name = 'res_comm_both';
      setData({ ...data, [name]: e });
      console.log(data);
    }
  };

  const [dropdownValue, setDropdown] = useState(0);
  const dependableDropdown = (e) => {
    console.log(e);
    if (
      e == 'I want to see returns (IRR) at a particular price and business plan'
    ) {
      setDropdown(1);
      const name = 'pov1';
      const value =
        'I want to see returns (IRR) at a particular price and business plan';
      setData({ ...data, [name]: value });
      console.log(data);
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
      console.log(data);
    }
  };

  const [pov2, setpov2] = useState(0);
  const dropdownPov2 = (e) => {
    console.log('pov2', e);
    // const name = 'pov2';
    // setData({ ...data, [name]: e });
    // console.log(data);

    if (e == 'I am buying the land and developing the project myself') {
      setpov2(1);
      const value = 'I am buying the land and developing the project myself';
      const name = 'pov2';
      setData({ ...data, [name]: value });
      console.log(data);
    }
    if (
      e ==
      'I am buying the land as a financial investor and will do a Revenue Share JDA with a developer'
    ) {
      setpov2(2);
      const value =
        'I am buying the land as a financial investor and will do a Revenue Share JDA with a developer';
      const name = 'pov2';
      setData({ ...data, [name]: value });
      console.log(data);
    }
    if (
      e == 'I want to value the asset basis the total project free cashflows'
    ) {
      setpov2(3);
      const value =
        'I want to value the asset basis the total project free cashflows';
      const name = 'pov2';
      setData({ ...data, [name]: value });
      console.log(data);
    }
    if (
      e ==
      'I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer'
    ) {
      setpov2(4);
      const value =
        'I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer';
      const name = 'pov2';
      setData({ ...data, [name]: value });
      console.log(data);
    }
  };

  const [currency, setCurrency] = useState(0);
  const currencySelect = (e) => {
    console.log(e);
    const name = 'eval_mn_crore';
    setData({ ...data, [name]: e });

    if (e == 'INR mn') {
      setCurrency(1);
    }
    if (e == 'INR Crore') {
      setCurrency(2);
    }
  };

  const [builtupSaleable, setbuiltupOrSaleable] = useState(0);
  const builtupOrSaleable = (e) => {
    console.log(e);
    const name = 'built_up_area';
    setData({ ...data, [name]: e });

    if (e == 'Built Up Area') {
      setbuiltupOrSaleable(1);
    }
    if (e == 'Saleable Area') {
      setbuiltupOrSaleable(2);
    }
  };
  // async function handleSubmit() {
  //   try {
  //     console.log('Data:', data);
  //     const url =
  //       'https://script.google.com/macros/s/AKfycbw_2GIZsjao_JjiPcTmP6Yirpxbaolbr1T5UBH87swMNXOIZlBt-MmGURKaPCxupP2A/exec';
  //     const requestOptions = {
  //       method: 'POST',
  //       mode: 'no-cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify([{ data }]),
  //     };

  //     let response = await fetch(url, requestOptions);
  //     console.log(response);
  //     // let res = await response.json(); //or .json() or .text()
  //     // console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // const [checked, setChecked] = React.useState([24, 22]);
  // const [selectedEnabled, setSelectedEnabled] = React.useState('b');
  // const [checkedA, setCheckedA] = React.useState(true);
  // const [checkedB, setCheckedB] = React.useState(false);
  // React.useEffect(() => {
  //   if (
  //     !document
  //       .getElementById('sliderRegular')
  //       .classList.contains('noUi-target')
  //   ) {
  //     Slider.create(document.getElementById('sliderRegular'), {
  //       start: [40],
  //       connect: [true, false],
  //       step: 1,
  //       range: { min: 0, max: 100 },
  //     });
  //   }
  //   if (
  //     !document.getElementById('sliderDouble').classList.contains('noUi-target')
  //   ) {
  //     Slider.create(document.getElementById('sliderDouble'), {
  //       start: [20, 60],
  //       connect: [false, true, false],
  //       step: 1,
  //       range: { min: 0, max: 100 },
  //     });
  //   }
  //   return function cleanup() {};
  // });
  // const handleToggle = (value) => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //   setChecked(newChecked);
  // };

  const innerStyles = {
    dropdownStyle: {
      marginLeft: '2rem',
    },
  };

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Personal Information</h3>
        </div>
        <div id='email'>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <GridItem xs={12} sm={12} md={6}>
              <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
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

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <GridItem xs={12} sm={12} md={6}>
              <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
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
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <h5>We&apos;ll analyse it from your point of view! - 1 </h5>
              <div style={innerStyles.dropdownStyle}>
                <CustomDropdown
                  buttonText='Select'
                  customButtonStyle={{
                    backgroundColor: '#e9ecef',
                    color: '#212529',
                    marginLeft: '15rem',
                    padding: '12px 115px',
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
            </div>
            <div style={{ display: 'flex', marginLeft: '48.5rem' }}>
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
          </div>
          <div className='dropdown'>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <h5>We&apos;ll analyse it from your point of view! - 2</h5>
              <div style={innerStyles.dropdownStyle}>
                <CustomDropdown
                  customButtonStyle={{
                    backgroundColor: '#e9ecef',
                    color: '#212529',
                    marginLeft: '15rem',
                    padding: '12px 115px',
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
            </div>
            <div style={{ display: 'flex', marginLeft: '48.5rem' }}>
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
          </div>

          <div className='dropdown'>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <h5>
                Is it residential or commercial or residential with commercial
                component?
              </h5>
              <div style={innerStyles.dropdownStyle}>
                <CustomDropdown
                  customButtonStyle={{
                    backgroundColor: '#e9ecef',
                    color: '#212529',
                    marginLeft: '0.5rem',
                    padding: '12px 115px',
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
            </div>
            <div style={{ display: 'flex', marginLeft: '48.5rem' }}>
              {commOrRes === 1 ? <Primary>Residential</Primary> : <></>}
              {commOrRes === 2 ? <Primary>Commercial</Primary> : <></>}
              {commOrRes === 3 ? (
                <Primary>Residential with Commercial Component</Primary>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className='dropdown'>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <h5>
                Would you like to evaluate your project in INR mn or INR crore?
              </h5>
              <div style={innerStyles.dropdownStyle}>
                <CustomDropdown
                  customButtonStyle={{
                    backgroundColor: '#e9ecef',
                    color: '#212529',
                    marginLeft: '5.5rem',
                    padding: '12px 115px',
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
            </div>
            <div style={{ display: 'flex', marginLeft: '48.5rem' }}>
              {currency === 1 ? <Primary>INR mn</Primary> : <></>}
              {currency === 2 ? <Primary>INR Crore</Primary> : <></>}
            </div>
          </div>
        </div>

        <div className={classes.space70} />
        <div id='Section2'>
          <div className={classes.title}>
            <h3>Assumption</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <GridItem xs={12} sm={12} md={6}>
              <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
                how big is the land parcel?
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
                }}
              />
            </GridItem>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <GridItem xs={12} sm={12} md={6}>
              <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
                whats the cost of your land (we&apos;re assuming upfront
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
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <GridItem xs={12} sm={12} md={6}>
                <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
                  how much saleable area in the project?
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
                  }}
                />
              </GridItem>
            </div>

            <div style={{ display: 'flex' }}>
              <GridItem xs={12} sm={12} md={6}>
                <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
                  Whats your all inclusive sales price?
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
                  }}
                />
              </GridItem>
            </div>

            <div style={{ display: 'flex' }}>
              <GridItem xs={12} sm={12} md={6}>
                <p style={{ paddingTop: '2rem', margin: '0 32px' }}>
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
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <GridItem xs={12} sm={12} md={6}>
                <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
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
                  }}
                />
              </GridItem>
            </div>

            <div style={{ display: 'flex' }}>
              <GridItem xs={12} sm={12} md={6}>
                <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
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
                  }}
                />
              </GridItem>
            </div>

            <div style={{ display: 'flex' }}>
              <GridItem xs={12} sm={12} md={6}>
                <p style={{ paddingTop: '2rem', margin: '0 32px' }}>
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

          <GridContainer>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginLeft: '-26px',
              }}
            >
              <GridItem xs={12} sm={12} md={6}>
                <h5>
                  Would you like to calculate construction cost on saleable area
                  or add a separate construction area / built up area
                </h5>
              </GridItem>

              <div style={innerStyles.dropdownStyle}>
                <CustomDropdown
                  buttonText='Select'
                  customButtonStyle={{
                    backgroundColor: '#e9ecef',
                    color: '#212529',
                    padding: '12px 100px',
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
            </div>
            <div style={{ display: 'flex', marginLeft: '49.5rem' }}>
              {builtupSaleable === 1 ? <Primary>Built Up Area</Primary> : <></>}
              {builtupSaleable === 2 ? <Primary>Saleable Area</Primary> : <></>}
            </div>
            {/* </GridItem> */}
          </GridContainer>

          {builtupSaleable == 1 && builtupSaleable !== 2 ? (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <GridItem xs={12} sm={12} md={6}>
                <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
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
                  }}
                />
              </GridItem>
            </div>
          ) : (
            <></>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <GridItem xs={12} sm={12} md={6}>
              <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
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
                }}
              />
            </GridItem>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <GridItem xs={12} sm={12} md={6}>
              <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
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
                }}
              />
            </GridItem>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <GridItem xs={12} sm={12} md={6}>
              <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
                what % brokerage will u pay?
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
                }}
              />
            </GridItem>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <GridItem xs={12} sm={12} md={6}>
              <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
                load up any upfront costs u may incur! (example - approval
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
                }}
              />
            </GridItem>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <GridItem xs={12} sm={12} md={6}>
              <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
                load up any other costs u want to!
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
                }}
              />
            </GridItem>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <GridItem xs={12} sm={12} md={6}>
              <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
                load up any other costs u want to! (spread over duration of
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
                }}
              />
            </GridItem>
          </div>
        </div>

        <div id='timelines'>
          <div className={classes.title}>
            <h3>Timelines</h3>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <GridItem xs={12} sm={12} md={6}>
              <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
                after how many quarters of buying land will project be launched?
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
                }}
              />
            </GridItem>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <GridItem xs={12} sm={12} md={6}>
              <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
                in how many quarters will construction be completed?
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
                }}
              />
            </GridItem>
          </div>
          {commOrRes === 1 || commOrRes === 3 ? (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <GridItem xs={12} sm={12} md={6}>
                <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
                  in how many quarters will you sell 100% of the residential
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
                  }}
                />
              </GridItem>
            </div>
          ) : (
            <></>
          )}

          {commOrRes === 2 || commOrRes === 3 ? (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <GridItem xs={12} sm={12} md={6}>
                <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
                  in how many quarters will you sell 100% of the commercial
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
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <GridItem xs={12} sm={12} md={6}>
                <p style={{ paddingTop: '2rem', marginLeft: '2rem' }}>
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
                  'animation-duration': '1s',
                  'animation-iteration-count': 'infinite',
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
    </div>
  );
}

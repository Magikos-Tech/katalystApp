import React from 'react';
import axios from 'axios';
import Icon from '@material-ui/core/Icon';

import Primary from 'components/Typography/Primary.js';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Button from 'components/CustomButtons/Button.js';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import CustomInput from 'components/CustomInput/CustomInput.js';

import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { useState } from 'react';
import BuySellTable from './BuySellTable.js';
import './SectionBasics.css';
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
    LO_share: '',
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
    email: {
      isError: false,
      message: '',
    },
    description: {
      isError: false,
      message: '',
    },
    pov1: {
      isError: false,
      message: '',
    },
    pov2: {
      isError: false,
      message: '',
    },
    res_comm_both: {
      isError: false,
      message: '',
    },
    eval_mn_crore: {
      isError: false,
      message: '',
    },
    land_parcel: {
      isError: false,
      message: '',
    },
    cost_of_land: {
      isError: false,
      message: '',
    },
    LO_share: {
      isError: false,
      message: '',
    },
    saleable_area_res: {
      isError: false,
      message: '',
    },
    inc_sale_price_res: {
      isError: false,
      message: '',
    },
    quarterly_escalation_res: {
      isError: false,
      message: '',
    },
    saleable_area: {
      isError: false,
      message: '',
    },
    inc_sale_price: {
      isError: false,
      message: '',
    },
    quarterly_escalation: {
      isError: false,
      message: '',
    },
    built_up_area: {
      isError: false,
      message: '',
    },
    total_built_up_area: {
      isError: false,
      message: '',
    },
    cost_estimate: {
      isError: false,
      message: '',
    },
    quarterly_escalation_con: {
      isError: false,
      message: '',
    },
    brokerage: {
      isError: false,
      message: '',
    },
    upfront_costs: {
      isError: false,
      message: '',
    },
    other_costs: {
      isError: false,
      message: '',
    },
    other_costs_over_duration: {
      isError: false,
      message: '',
    },
    quarters_to_land_project: {
      isError: false,
      message: '',
    },
    quarters_to_complete_construction: {
      isError: false,
      message: '',
    },
    quarters_to_sell_res: {
      isError: false,
      message: '',
    },
    quarters_to_sell_comm: {
      isError: false,
      message: '',
    },
    desired_return: {
      isError: false,
      message: '',
    },
  });

  const [tableData, setTableData] = useState(null);
  const [isSaving, setSaving] = useState(false);
  // const { emailId } = data;

  // const onChange = (e) => {
  //   //console.log('Event');
  //   //console.log(e.target.value);
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  function isNumber(str) {
    if (typeof str != 'string') return false; // we only process strings!
    // could also coerce to string: str = ""+str
    return !isNaN(str) && !isNaN(parseFloat(str)) && parseFloat(str) >= 0;
  }

  function verfiyEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const onChange = (obj) => {
    console.log('Onchange event called', obj);
    const { name, value } = obj;
    if (name == 'email') {
      if (value == '' || !verfiyEmail(value)) {
        error[name] = {
          isError: true,
          message: 'Please enter valid email address.',
        };
      } else {
        error[name] = {
          isError: false,
          message: '',
        };
      }
    } else if (name == 'description') {
      if (value == '') {
        error[name] = {
          isError: true,
          message: 'Please enter your description.',
        };
      } else {
        error[name] = {
          isError: false,
          message: '',
        };
      }
    } else if (
      name == 'quarterly_escalation_con' ||
      name == 'quarterly_escalation' ||
      name == 'quarterly_escalation_res'
    ) {
      if (Number(value) < 0 || Number(value) > 5 || !isNumber(value)) {
        error[name] = {
          isError: true,
          message: 'Please enter value between 0-5',
        };
      } else
        error[name] = {
          isError: false,
          message: '',
        };
    } else if (name == 'quarters_to_land_project') {
      if (Number(value) > 40 || Number(value) < 1 || !isNumber(value)) {
        error[name] = {
          isError: true,
          message: 'Please enter value between 0-40.',
        };
      } else {
        error[name] = {
          isError: false,
          message: '',
        };
      }
    } else if (
      name == 'quarters_to_complete_construction' ||
      name == 'quarters_to_sell_res' ||
      name == 'quarters_to_sell_comm'
    ) {
      if (Number(value) < 1 || !isNumber(value)) {
        error[name] = {
          isError: true,
          message: 'Please enter value greater than 1.',
        };
      } else
        error[name] = {
          isError: false,
          message: '',
        };
    } else if (
      name == 'brokerage' ||
      name == 'other_costs' ||
      name == 'LO_share'
    ) {
      if (Number(value) > 100 || isNumber(value)) {
        error[name] = {
          isError: true,
          message: 'Please enter value between 0-100.',
        };
      } else
        error[name] = {
          isError: false,
          message: '',
        };
    } else {
      if (value == '' || !isNumber(value)) {
        error[name] = {
          isError: true,
          message: 'Please enter a positive number.',
        };
      } else {
        error[name] = {
          isError: false,
          message: '',
        };
      }
    }

    // after validations set values into data object.
    setData({ ...data, [name]: value });
    setError({ ...error });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
    let result = true;

    if (data.email == '' || !verfiyEmail(data.email)) {
      result = false;
      error['email'] = {
        isError: true,
        message: 'Enter a valid email address.',
      };
    } else {
      error['email'] = {
        isError: false,
        message: '',
      };
    }

    if (data.description === '') {
      result = false;
      error['description'] = {
        isError: true,
        message: 'Please enter your description.',
      };
    } else {
      error['description'] = {
        isError: false,
        message: '',
      };
    }

    if (data.cost_estimate == '' || !verfiyEmail(data.cost_estimate)) {
      result = false;
      error['cost_estimate'] = {
        isError: true,
        message: 'Enter a positve number.',
      };
    } else {
      error['cost_estimate'] = {
        isError: false,
        message: '',
      };
    }

    if (data.pov1 === '') {
      result = false;
      error['pov1']['isError'] = true;
    } else {
      if (
        data.pov1 !==
        'I want to value the asset (NPV) basis a business plan and discount rate or desired return'
      ) {
        data.desired_return = '';
      }
    }
    if (data.pov2 === '') {
      result = false;
      error['pov2']['isError'] = true;
    }
    if (data.res_comm_both === '') {
      result = false;
      error['res_comm_both']['isError'] = true;
    } else {
      if (
        data.res_comm_both === 'Residential' ||
        data.res_comm_both === 'Residential with Commercial Component'
      ) {
        if (!isNumber(data.saleable_area_res.replace('%', ''))) {
          result = false;
          error['saleable_area_res']['isError'] = true;
          error['saleable_area_res']['message'] =
            'Please enter a number value.';
        }
        if (!isNumber(data.inc_sale_price_res.replace('%', ''))) {
          result = false;
          error['inc_sale_price_res']['isError'] = true;
          error['inc_sale_price_res']['message'] =
            'Please enter a number value.';
        }
        if (
          !isNumber(data.quarterly_escalation_res.replace('%', '')) ||
          Number(data.quarterly_escalation_res) > 5 ||
          Number(data.quarterly_escalation_res) < 0
        ) {
          result = false;
          error['quarterly_escalation_res']['isError'] = true;
          error['inc_sale_price_res']['message'] =
            'Please enter a number less then 5 and greater than 0.';
        }
        if (
          !isNumber(data.quarters_to_sell_res.replace('%', '')) ||
          data.quarters_to_sell_res.replace('%', '') < 1
        ) {
          result = false;
          error['quarters_to_sell_res']['isError'] = true;
          error['quarters_to_sell_res']['message'] =
            'Please enter a number greater than 1.';
        }
        if (data.res_comm_both !== 'Residential with Commercial Component') {
          data.saleable_area = '';
          data.inc_sale_price = '';
          data.quarterly_escalation = '';
          data.quarters_to_sell_comm = '';
          error.saleable_area.isError = false;
          error.inc_sale_price.isError = false;
          error.quarterly_escalation.isError = false;
          error.quarters_to_sell_comm.isError = false;
        }
      }
      if (
        data.res_comm_both == 'Commercial' ||
        data.res_comm_both == 'Residential with Commercial Component'
      ) {
        if (
          !isNumber(data.saleable_area.replace('%', '')) ||
          data.saleable_area.replace('%', '') == ''
        ) {
          result = false;
          error['saleable_area']['isError'] = true;
          error['saleable_area']['message'] = 'Please enter a positve number.';
        }
        if (!isNumber(data.inc_sale_price.replace('%', ''))) {
          result = false;
          error['inc_sale_price']['isError'] = true;
          error['inc_sale_price']['message'] = 'Please enter a positve number.';
        }
        if (
          !isNumber(data.quarterly_escalation.replace('%', '')) ||
          Number(data.quarterly_escalation.replace('%', '')) > 5 ||
          Number(data.quarterly_escalation.replace('%', '')) < 0
        ) {
          result = false;
          error['quarterly_escalation']['isError'] = true;
          error['quarterly_escalation']['message'] =
            'Please enter a number less than 5 and greater than 0.';
        }
        if (
          !isNumber(data.quarters_to_sell_comm.replace('%', '')) ||
          data.quarters_to_sell_comm.replace('%', '') < 1
        ) {
          result = false;
          error['quarters_to_sell_comm']['isError'] = true;
          error['quarters_to_sell_comm']['message'] =
            'Please enter a number greater than 1.';
        }
        if (
          !isNumber(data.quarterly_escalation_res.replace('%', '')) ||
          data.quarterly_escalation_res.replace('%', '') < 1 ||
          data.quarterly_escalation_res.replace('%', '') > 5
        ) {
          result = false;
          error['quarterly_escalation_res']['isError'] = true;
          error['quarterly_escalation_res']['message'] =
            'Please enter a number between 0-5';
        }

        if (data.res_comm_both !== 'Residential with Commercial Component') {
          data.saleable_area_res = '';
          data.inc_sale_price_res = '';
          data.quarterly_escalation_res = '';
          data.quarters_to_sell_res = '';
          error.saleable_area_res.isError = false;
          error.inc_sale_price_res.isError = false;
          error.quarterly_escalation_res.isError = false;
          error.quarters_to_sell_res.isError = false;
        }
      }
    }
    if (data.built_up_area === '') {
      result = false;
      error['built_up_area']['isError'] = true;
      error['built_up_area']['message'] = 'Please enter a positve number.';
    } else {
      if (data.built_up_area === 'Built Up Area') {
        if (!isNumber(data.total_built_up_area.replace('%', ''))) {
          result = false;
          error['total_built_up_area']['isError'] = true;
          error['total_built_up_area']['message'] = 'Please enter a positve number.';
        }
      }
    }
    if (!verfiyEmail(data.email)) {
      result = false;
      error['email']['isError'] = true;
      error['email']['message'] = 'Please enter a valid email address.';
    }
    if (data.description === '') {
      result = false;
      error['description']['isError'] = true;
      error['description']['message'] = 'Please enter your description.';
    }
    if (data.eval_mn_crore === '') {
      result = false;
      error['eval_mn_crore']['isError'] = true;
    }
    if (!isNumber(data.land_parcel.replace('%', ''))) {
      result = false;
      error['land_parcel']['isError'] = true;
      error['land_parcel']['message'] = 'Please enter a positive number.';
    }
    if (!isNumber(data.cost_of_land.replace('%', ''))) {
      result = false;
      error['cost_of_land']['isError'] = true;
      error['cost_of_land']['message'] = 'Please enter a positve number.';
    }
    if (
      !isNumber(data.cost_estimate.replace('%', '')) ||
      data.cost_estimate.replace('%', '') == ''
    ) {
      result = false;
      error['cost_estimate']['isError'] = true;
      error['cost_estimate']['isError'] = 'Please enter a positive number.';
    }
    if (
      !isNumber(data.quarterly_escalation_con.replace('%', '')) ||
      data.quarterly_escalation_con.replace('%', '') > 100
    ) {
      result = false;
      error['quarterly_escalation_con']['isError'] = true;
      error['quarterly_escalation_con']['message'] =
        'Please enter a number between 0-100.';
    }
    if (
      !isNumber(data.brokerage.replace('%', '')) ||
      Number(data.brokerage) > 100
    ) {
      result = false;
      error['brokerage']['isError'] = true;
      error['brokerage']['message'] = 'Please enter a number between 0-100';
    }
    if (!isNumber(data.upfront_costs.replace('%', ''))) {
      result = false;
      error['upfront_costs']['isError'] = true;
      error['upfront_costs']['message'] = 'Please enter a positive number.';
    }
    if (
      !isNumber(data.other_costs.replace('%', '')) ||
      Number(data.other_costs.replace('%', '')) > 100
    ) {
      result = false;
      error['other_costs']['isError'] = true;
      error['other_costs']['message'] = 'Please enter a number between 0-100.';
    }
    if (!isNumber(data.other_costs_over_duration.replace('%', ''))) {
      result = false;
      error['other_costs_over_duration']['isError'] = true;
      error['other_costs_over_duration']['message'] = 'Please enter a positive number.';
    }
    if (
      !isNumber(data.quarters_to_land_project.replace('%', '')) ||
      Number(data.quarters_to_land_project) > 40 ||
      Number(data.quarters_to_land_project) < 1 ||
      data.quarters_to_land_project == ''
    ) {
      result = false;
      error['quarters_to_land_project']['isError'] = true;
      error['quarters_to_land_project']['message'] =
        'Please enter a number greater than 1 and less than 40';
    }
    if (
      !isNumber(data.quarters_to_complete_construction.replace('%', '')) ||
      Number(data.quarters_to_complete_construction) < 1
    ) {
      result = false;
      error['quarters_to_complete_construction']['isError'] = true;
      error['quarters_to_complete_construction']['message'] =
        'Please enter a number greater than 1.';
    }
    if (
      data.pov2 ===
        'I am buying the land as a financial investor and will do a Revenue Share JDA with a developer' ||
      data.pov2 ===
        'I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer'
    ) {
      if (
        !isNumber(data.LO_share.replace('%', '')) ||
        Number(data.LO_share.replace('%', '')) > 100
      ) {
        result = false;
        error['LO_share']['isError'] = true;
        error['LO_share']['message'] = 'Please enter a number less than .';
      } else {
        if (!data.LO_share.toString().includes('%')) {
          data.LO_share += '%';
        }
      }
    } else {
      data.LO_share = '';
      error.LO_share.isError = false;
    }
    if (
      data.pov1 ===
      'I want to value the asset (NPV) basis a business plan and discount rate or desired return'
    ) {
      //console.log(data.desired_return.replace("%", ""), isNumber(data.desired_return.replace("%", "")));

      if (
        !isNumber(data.desired_return.replace('%', '')) ||
        Number(data.desired_return.replace('%', '') > 100)
      ) {
        result = false;
        error.desired_return.isError = true;
        error.desired_return.message = 'Please enter number between 0-100';
      }
    } else {
      data.desired_return = '';
      error.desired_return.isError = false;
    }
    setError({ ...error });
    setSaving(result);
    if (result) {
      //console.log('Submitted Data:', data);
      axios({
        url: `https://script.google.com/macros/s/AKfycbw_2GIZsjao_JjiPcTmP6Yirpxbaolbr1T5UBH87swMNXOIZlBt-MmGURKaPCxupP2A/exec`,
        data,
        headers: { 'Content-Type': 'text/plain' },
        method: 'post',
      })
        .then((res) => {
          //console.log('Raw result', res);
          //console.log('Result DATA', res.data);

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
    setError({
      ...error,
      [name]: {
        isError: false,
        message: '',
      },
    });
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
      data.desired_return = '';
      error.desired_return.isError = false;
      setData({ ...data, [name]: value });
      setError({
        ...error,
        [name]: {
          isError: false,
          message: '',
        },
      });
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
      setError({
        ...error,
        [name]: {
          isError: false,
          message: '',
        },
      });
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
    setError({
      ...error,
      [name]: {
        isError: false,
        message: '',
      },
    });
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
    setError({
      ...error,
      [name]: {
        isError: false,
        message: '',
      },
    });
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
    setError({
      ...error,
      [name]: {
        isError: false,
        message: '',
      },
    });
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
          <div className='cont'>
            <div>
              <h5>Your email address</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                parentCallback={onChange}
                labelText=''
                name='email'
                id='float'
                formControlProps={{
                  fullWidth: true,
                  error: error['email']['isError'],
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <AlternateEmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {error['email']['isError'] ? (
                <p style={{ color: 'red' }}>{error['email']['message']}</p>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className='cont'>
            <div>
              <h5>Tell us about yourself!</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                labelText=''
                id='float'
                name='description'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error['description']['isError'],
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {error['description']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['description']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className={classes.space50} />
        <div>
          <div className={classes.title}>
            <h3>Choose your options</h3>
          </div>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                padding: '0 1rem 2rem 1rem',
              }}
            >
              <h5>We&apos;ll analyse it from your point of view! - 1 </h5>
              <div style={{ width: '300px' }}>
                <div style={innerStyles.dropdownStyle}>
                  <CustomDropdown
                    buttonText='Select'
                    customButtonStyle={{
                      backgroundColor: '#e9ecef',
                      color: '#212529',
                      width: '100%',
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
                      I want to see returns (IRR) at a particular price and
                      business plan
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
                {error['pov1']['isError'] ? (
                  <p style={{ color: 'red' }}>This is required.</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className='dropdown'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                padding: '0 1rem 2rem 1rem',
              }}
            >
              <h5>We&apos;ll analyse it from your point of view! - 2</h5>
              <div style={{ width: '300px' }}>
                <div style={innerStyles.dropdownStyle}>
                  <CustomDropdown
                    customButtonStyle={{
                      backgroundColor: '#e9ecef',
                      color: '#212529',
                      width: '100%',
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
                      I want to value the asset basis land owners share of
                      cashflows in a Revenue Share JDA with a developer
                    </Primary>
                  ) : (
                    <></>
                  )}
                </div>
                {error['pov2']['isError'] ? (
                  <p style={{ color: 'red' }}>This is required</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className='dropdown'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                padding: '0 1rem 2rem 1rem',
              }}
            >
              <h5>
                Is it residential or commercial or residential with commercial
                component?
              </h5>
              <div style={{ width: '300px' }}>
                <div style={innerStyles.dropdownStyle}>
                  <CustomDropdown
                    customButtonStyle={{
                      backgroundColor: '#e9ecef',
                      color: '#212529',
                      width: '100%',
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
                {error['res_comm_both']['isError'] ? (
                  <p style={{ color: 'red' }}>This is required</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className='dropdown'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                padding: '0 1rem 2rem 1rem',
              }}
            >
              <h5>
                Would you like to evaluate your project in INR mn or INR crore?
              </h5>
              <div style={{ width: '300px' }}>
                <div style={innerStyles.dropdownStyle}>
                  <CustomDropdown
                    customButtonStyle={{
                      backgroundColor: '#e9ecef',
                      color: '#212529',
                      width: '100%',
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
                {error['eval_mn_crore']['isError'] ? (
                  <p style={{ color: 'red' }}>This is required</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={classes.space30} />
        <div id='Section2'>
          <div className={classes.title}>
            <h3>Assumption</h3>
          </div>
          <div className='cont'>
            <div>
              <h5>How big is the land parcel?</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                parentCallback={onChange}
                id='float'
                name='land_parcel'
                labelText='acres'
                formControlProps={{
                  fullWidth: true,
                  error: error['land_parcel']['isError'],
                }}
              />
              {error['land_parcel']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['land_parcel']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className='cont'>
            <div>
              <h5>
                Whats the cost of your land (we&apos;re assuming upfront
                payment!)
              </h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                parentCallback={onChange}
                labelText={
                  currency == '1' ? 'INR MN per acre' : 'INR Crore per acre'
                }
                id='float'
                name='cost_of_land'
                formControlProps={{
                  fullWidth: true,
                  error: error['cost_of_land']['isError'],
                }}
              />
              {error['cost_of_land']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['cost_of_land']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          {data.pov2 ===
            'I am buying the land as a financial investor and will do a Revenue Share JDA with a developer' ||
          data.pov2 ===
            'I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer' ? (
            <div className='cont'>
              <div>
                <h5>LO Share</h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomInput
                  parentCallback={onChange}
                  labelText='%(percentage)'
                  id='float'
                  name='LO_share'
                  formControlProps={{
                    fullWidth: true,
                    error: error['LO_share']['isError'],
                  }}
                />
                {error['LO_share']['isError'] ? (
                  <p style={{ color: 'red' }}>{error['LO_share']['message']}</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

        {commOrRes === 1 || commOrRes === 3 ? (
          <div>
            <div className={classes.title}>
              <h3>Residential</h3>
            </div>
            <div className='cont'>
              <div>
                <h5>How much saleable area in the project?</h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomInput
                  labelText='square feet'
                  id='float'
                  name='saleable_area_res'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error['saleable_area_res']['isError'],
                  }}
                />
                {error['saleable_area_res']['isError'] ? (
                  <p style={{ color: 'red' }}>
                    {error['saleable_area_res']['message']}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className='cont'>
              <div>
                <h5>What&apos;s your all inclusive sales price?</h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomInput
                  labelText='INR / sft'
                  id='float'
                  name='inc_sale_price_res'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error['inc_sale_price_res']['isError'],
                  }}
                />
                {error['inc_sale_price_res']['isError'] ? (
                  <p style={{ color: 'red' }}>
                    {error['inc_sale_price_res']['message']}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className='cont'>
              <div>
                <h5>Would you like to assume any quarterly escalation?</h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomInput
                  labelText='%(Percentage)'
                  id='float'
                  name='quarterly_escalation_res'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error['quarterly_escalation_res']['isError'],
                  }}
                />
                {error['quarterly_escalation_res']['isError'] ? (
                  <p style={{ color: 'red' }}>
                    {error['quarterly_escalation_res']['message']}
                  </p>
                ) : (
                  <></>
                )}
              </div>
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
            <div className='cont'>
              <div>
                <h5>How much saleable area in the project?</h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomInput
                  labelText='square feet'
                  id='float'
                  name='saleable_area'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error['saleable_area']['isError'],
                  }}
                />
                {error['saleable_area']['isError'] ? (
                  <p style={{ color: 'red' }}>
                    {error['saleable_area']['message']}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className='cont'>
              <div>
                <h5>Whats your all inclusive sales price?</h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomInput
                  labelText='INR / sft'
                  id='float'
                  name='inc_sale_price'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error['inc_sale_price']['isError'],
                  }}
                />
                {error['inc_sale_price']['isError'] ? (
                  <p style={{ color: 'red' }}>
                    {error['inc_sale_price']['message']}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className='cont'>
              <div>
                <h5>Would you like to assume any quarterly escalation?</h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomInput
                  labelText='%(Percentage)'
                  id='float'
                  name='quarterly_escalation'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error['quarterly_escalation']['isError'],
                  }}
                />
                {error['quarterly_escalation']['isError'] ? (
                  <p style={{ color: 'red' }}>
                    {error['quarterly_escalation']['message']}
                  </p>
                ) : (
                  <></>
                )}
              </div>
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                padding: '0 1rem 2rem 1rem',
              }}
            >
              <h5 style={{ width: '400px' }}>
                Would you like to calculate construction cost on saleable area
                or add a separate construction area / built up area
              </h5>
              <div style={{ width: '300px' }}>
                <div style={innerStyles.dropdownStyle}>
                  <CustomDropdown
                    buttonText='Select'
                    customButtonStyle={{
                      backgroundColor: '#e9ecef',
                      color: '#212529',
                      width: '100%',
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
                  {builtupSaleable === 1 ? (
                    <Primary>Built Up Area</Primary>
                  ) : (
                    <></>
                  )}
                  {builtupSaleable === 2 ? (
                    <Primary>Saleable Area</Primary>
                  ) : (
                    <></>
                  )}
                  {error['built_up_area']['isError`'] ? (
                    <p style={{ color: 'red' }}>This is required</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>

          {builtupSaleable == 1 && builtupSaleable !== 2 ? (
            <div className='cont'>
              <div>
                <h5>How much built up area in the project?</h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomInput
                  labelText='square feet'
                  id='float'
                  name='total_built_up_area'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error['total_built_up_area']['isError'],
                  }}
                />
                {error['total_built_up_area']['isError'] ? (
                  <p style={{ color: 'red' }}>
                    {error['total_built_up_area']['message']}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className='cont'>
            <div>
              <h5>What&apos;s your cons cost estimate?</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                labelText='INR / sft'
                id='float'
                name='cost_estimate'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error['cost_estimate']['isError'],
                }}
              />
              {error['cost_estimate']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['cost_estimate']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className='cont'>
            <div>
              <h5>
                Would you like to assume any quarterly escalation in cons cost?
              </h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                labelText='%(percentage)'
                id='float'
                name='quarterly_escalation_con'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error['quarterly_escalation_con']['isError'],
                }}
              />
              {error['quarterly_escalation_con']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['quarterly_escalation_con']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className='cont'>
            <div>
              <h5>What % brokerage will you pay?</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                labelText='%(percentage) of sales'
                id='float'
                name='brokerage'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error['brokerage']['isError'],
                }}
              />
              {error['brokerage']['isError'] ? (
                <p style={{ color: 'red' }}>{error['brokerage']['message']}</p>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className='cont'>
            <div>
              <h5>
                Load up any upfront costs you may incur! (example - approval
                costs)
              </h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                labelText={currency == '1' ? 'INR MN' : 'INR Crore'}
                id='float'
                name='upfront_costs'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error['upfront_costs']['isError'],
                }}
              />
              {error['upfront_costs']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['upfront_costs']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className='cont'>
            <div>
              <h5>Load up any other costs you want to!</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                labelText='% of collections'
                id='float'
                name='other_costs'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error['other_costs']['isError'],
                }}
              />
              {error['other_costs']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['other_costs']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className='cont'>
            <div>
              <h5>
                Load up any other costs you want to!(spread over duration of
                cons)
              </h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                labelText={currency == '1' ? 'INR MN' : 'INR Crore'}
                id='float'
                name='other_costs_over_duration'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error['other_costs_over_duration']['isError'],
                }}
              />
              {error['other_costs_over_duration']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['other_costs_over_duration']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div id='timelines'>
          <div className={classes.title}>
            <h3>Timelines</h3>
          </div>

          <div className='cont'>
            <div>
              <h5>
                After how many quarters of buying land will project be launched?
              </h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                labelText=''
                id='float'
                name='quarters_to_land_project'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error['quarters_to_land_project']['isError'],
                }}
              />
              {error['quarters_to_land_project']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['quarters_to_land_project']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className='cont'>
            <div>
              <h5>In how many quarters will construction be completed?</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                labelText=''
                id='float'
                name='quarters_to_complete_construction'
                parentCallback={onChange}
                formControlProps={{
                  fullWidth: true,
                  error: error['quarters_to_complete_construction']['isError'],
                }}
              />
              {error['quarters_to_complete_construction']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['quarters_to_complete_construction']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          {commOrRes === 1 || commOrRes === 3 ? (
            <div className='cont'>
              <div>
                <h5>
                  In how many quarters will you sell 100% of the residential
                  inventory?
                </h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomInput
                  labelText=''
                  id='float'
                  name='quarters_to_sell_res'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error['quarters_to_sell_res']['isError'],
                  }}
                />
                {error['quarters_to_sell_res']['isError'] ? (
                  <p style={{ color: 'red' }}>
                    {error['quarters_to_sell_res']['message']}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}

          {commOrRes === 2 || commOrRes === 3 ? (
            <div className='cont'>
              <div>
                <h5>
                  In how many quarters will you sell 100% of the commercial
                  inventory?
                </h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomInput
                  labelText=''
                  id='float'
                  name='quarters_to_sell_comm'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error['quarters_to_sell_comm']['isError'],
                  }}
                />
                {error['quarters_to_sell_comm']['isError'] ? (
                  <p style={{ color: 'red' }}>
                    {error['quarters_to_sell_comm']['message']}
                  </p>
                ) : (
                  <></>
                )}
              </div>
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
            <div className='cont'>
              <div>
                <h5>Desired return or discount rate?</h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomInput
                  labelText='%(Percentage)'
                  id='float'
                  name='desired_return'
                  parentCallback={onChange}
                  formControlProps={{
                    fullWidth: true,
                    error: error['desired_return']['isError'],
                  }}
                />
                {error['desired_return']['isError'] ? (
                  <p style={{ color: 'red' }}>
                    {error['desired_return']['message']}
                  </p>
                ) : (
                  <></>
                )}
              </div>
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
                  animationDuration: '1s',
                  animationIterationCount: 'infinite',
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
          <BuySellTable data={tableData}></BuySellTable>
        </div>
      </div>
    </div>
  );
}

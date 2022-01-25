import React from 'react';
import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import 'views/BuildAndLease/BuildLease.css';

const useStyles = makeStyles(styles);
import { useState } from 'react';
import axios from 'axios';
import { Icon } from '@material-ui/core';
import BuildLeaseTable from './BuildLeaseTable';
function BuildLease() {
  const classes = useStyles();
  const [data, setData] = useState({
    pov1: 'I want to see returns (IRR) at a particular price and business plan',
    pov2: 'I am buying the land and developing the project myself',
    eval_mn_crore: 'INR crore',
    land_parcel: '',
    cost_of_land: '',
    LO_share: '',
    leasable_area_project: '',
    rate_to_lease_inv: '',
    quarterly_escalation: '',
    CAM_margin_profit: '',
    saleable_area_or_built_up: 'Saleable Area',
    builtup_area_project: '',
    cons_cost_estimate: '',
    quarterly_escalation_cons_cost: '',
    brokerage: '',
    upfront_costs: '',
    other_costs: '',
    operational_cost: '',
    quarters_to_launch_project: '',
    quarters_to_complete_consturction: '',
    leasable_area: '',
    peak_lease: '',
    post_peak_lease: '',
    asset_exit_peak: '',
    construction_finance_lim: '',
    construction_finance_cost: '',
    LRD_cost: '',
    LRD_principal_amortisation: '',
    desired_return: '',
    exit_cap_rate: '',
  });

  const [error, setError] = useState({
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
    leasable_area_project: {
      isError: false,
      message: '',
    },
    rate_to_lease_inv: {
      isError: false,
      message: '',
    },
    quarterly_escalation: {
      isError: false,
      message: '',
    },
    CAM_margin_profit: {
      isError: false,
      message: '',
    },
    saleable_area_or_built_up: 'Saleable Area',
    builtup_area_project: {
      isError: false,
      message: '',
    },
    cons_cost_estimate: {
      isError: false,
      message: '',
    },
    quarterly_escalation_cons_cost: {
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
    operational_cost: {
      isError: false,
      message: '',
    },
    quarters_to_launch_project: {
      isError: false,
      message: '',
    },
    quarters_to_complete_consturction: {
      isError: false,
      message: '',
    },
    leasable_area: {
      isError: false,
      message: '',
    },
    peak_lease: {
      isError: false,
      message: '',
    },
    post_peak_lease: {
      isError: false,
      message: '',
    },
    asset_exit_peak: {
      isError: false,
      message: '',
    },
    construction_finance_lim: {
      isError: false,
      message: '',
    },
    construction_finance_cost: {
      isError: false,
      message: '',
    },
    LRD_cost: {
      isError: false,
      message: '',
    },
    LRD_principal_amortisation: {
      isError: false,
      message: '',
    },
    desired_return: {
      isError: false,
      message: '',
    },
    exit_cap_rate: {
      isError: false,
      message: '',
    },
  });

  const [pov2, setPov2] = useState([
    'I am buying the land and developing the project myself',
    'I am buying the land as a financial investor and will do a Revenue Share JDA with a developer',
  ]);

  const pov1Data = [
    'I want to see returns (IRR) at a particular price and business plan',
    'I want to value the asset (NPV) basis a business plan and discount rate or desired return',
  ];

  const pov2Data_1 = [
    'I am buying the land and developing the project myself',
    'I am buying the land as a financial investor and will do a Revenue Share JDA with a developer',
  ];

  const pov2Data_2 = [
    'I want to value the asset basis the total project free cashflows',
    'I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer',
  ];

  const onPov1Change = (e) => {
    const value = e.target.value;
    let selectedPov2 = '';
    if (value === pov1Data[0]) {
      selectedPov2 = pov2Data_1[0];
      setPov2(pov2Data_1);
    } else {
      selectedPov2 = pov2Data_2[0];
      setPov2(pov2Data_2);
    }
    setData({ ...data, pov1: value, pov2: selectedPov2 });
  };

  const handlePov2Change = (e) => {
    const value = e.target.value;
    let LO_share = data.LO_share;
    if (
      value !=
      'I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer'
    ) {
      LO_share = '';
    }
    setData({ ...data, pov2: value, LO_share: LO_share });
  };

  const handleCurrency = (e) => {
    setData({ ...data, eval_mn_crore: e.target.value });
  };

  const onCustomInputChange = (e) => {
    const { name, value } = e;

    if (value === '' || !isNumber(value)) {
      error[name] = {
        isError: true,
        message: 'Enter a positve number.',
      };
    } else if (name == 'exit_cap_rate') {
      if (Number(value) < 0 || Number(value) > 100 || !isNumber(value))
        error[name] = {
          isError: true,
          message: 'Enter a number between 0-100.',
        };
      else{
        error[name] = {
          isError: false,
          message: '',
        };
      }
    } else if (name == 'quarters_to_launch_project') {
      //quarters to lunch project should not be more than 40
      if (
        Number(value) > 40 ||
        Number(value) < 1 ||
        !isNumber(value) ||
        value == ''
      )
        error[name] = {
          isError: true,
          message: 'Enter a number btween 1-40.',
        };
      else
        error[name] = {
          isError: false,
          message: '',
        };
    } else if (
      name == 'quarterly_escalation' ||
      name == 'quarterly_escalation_cons_cost'
    ) {
      if (
        Number(value) > 5 ||
        Number(value) < 0 ||
        !isNumber(value) ||
        value == ''
      )
        error[name] = {
          isError: true,
          message: 'Enter a number between 0-5..',
        };
      else
        error[name] = {
          isError: false,
          message: '',
        };
    } else if ( 
      name == 'LRD_cost' ||
      name == 'construction_finance_cost' ||
      name == 'construction_finance_lim' ||
      name == 'leasable_area' ||
      name == 'peak_lease'
    ) {
      if (Number(value) > 100 || !isNumber(value))
        error[name] = {
          isError: true,
          message: 'Enter a number between 0-100',
        };
      else
        error[name] = {
          isError: false,
          message: '',
        };
    } else if (
      name == 'asset_exit_peak' ||
      name == 'post_peak_lease' ||
      name == 'quarters_to_complete_consturction'
    ) {
      if (Number(value) < 1 || !isNumber(value))
        error[name] = {
          isError: true,
          message: 'Enter a number greater than 1.',
        };
      else
        error[name] = {
          isError: false,
          message: '',
        };
    } else
      error[name] = {
        isError: false,
        message: '',
      };
    setError({ ...error });
    setData({ ...data, [name]: value });
  };

  const saleBuiltChange = (e) => {
    const value = e.target.value;
    setData({ ...data, saleable_area_or_built_up: value });
  };

  const [tableData, setTableData] = useState(null);
  const [isSaving, setSaving] = useState(false);
  function isNumber(str) {
    if (typeof str != 'string') return false; // we only process strings!
    // could also coerce to string: str = ""+str
    return !isNaN(str) && !isNaN(parseFloat(str)) && parseFloat(str) >= 0;
  }

  const handleSubmit = (e) => {
    setTableData(null);
    e.preventDefault();
    if (data.saleable_area_or_built_up != 'Built Up Area') {
      data.builtup_area_project = '';
    }
    if (
      data.pov1 !=
      'I want to value the asset (NPV) basis a business plan and discount rate or desired return'
    ) {
      data.desired_return = '';
    }

    if (data.LO_share != '' && !data.LO_share.toString().includes('%')) {
      data.LO_share += '%';
    }
    if (
      data.quarterly_escalation_cons_cost != '' &&
      !data.quarterly_escalation_cons_cost.toString().includes('%')
    ) {
      data.quarterly_escalation_cons_cost += '%';
    }

    if (
      data.quarterly_escalation != '' &&
      !data.quarterly_escalation.toString().includes('%')
    ) {
      data.quarterly_escalation += '%';
    }

    if (
      data.leasable_area != '' &&
      !data.leasable_area.toString().includes('%')
    ) {
      data.leasable_area += '%';
    }
    if (data.peak_lease != '' && !data.peak_lease.toString().includes('%')) {
      data.peak_lease += '%';
    }
    if (
      data.construction_finance_lim != '' &&
      !data.construction_finance_lim.toString().includes('%')
    ) {
      data.construction_finance_lim += '%';
    }
    if (
      data.construction_finance_cost != '' &&
      !data.construction_finance_cost.toString().includes('%')
    ) {
      data.construction_finance_cost += '%';
    }
    if (
      data.construction_finance_cost != '' &&
      !data.construction_finance_cost.toString().includes('%')
    ) {
      data.construction_finance_cost += '%';
    }
    if (data.LRD_cost != '' && !data.LRD_cost.toString().includes('%')) {
      data.LRD_cost += '%';
    }
    if (
      data.desired_return != '' &&
      !data.desired_return.toString().includes('%')
    ) {
      data.desired_return += '%';
    }
    if (
      data.exit_cap_rate != '' &&
      !data.exit_cap_rate.toString().includes('%')
    ) {
      data.exit_cap_rate += '%';
    }

    let result = true;
    if (
      data.saleable_area_or_built_up == 'Built Up Area' &&
      (data.builtup_area_project == '' ||
        !isNumber(data.builtup_area_project.replace('%', '')))
    ) {
      result = false;
      error['builtup_area_project']['isError'] = true;
      error['builtup_area_project']['message'] =
        'Please enter a positive number.';
    }
    if (
      data.pov1 == pov1Data[1] &&
      (data.desired_return == '' ||
        !isNumber(data.desired_return.replace('%', '')))
    ) {
      result = false;
      error['desired_return']['isError'] = true;
      error['desired_return']['message'] =
        'Please enter a number between 0-100.';
    }
    if (
      data.pov2 == pov2Data_2[1] &&
      (data.LO_share == '' || !isNumber(data.LO_share.replace('%', '')))
    ) {
      result = false;
      error['LO_share']['isError'] = true;
      error['LO_share']['message'] = 'Please enter a number between 0-100.';
    }
    if (
      data.land_parcel == '' ||
      !isNumber(data.land_parcel.replace('%', ''))
    ) {
      result = false;
      error['land_parcel']['isError'] = true;
      error['land_parcel']['message'] = 'Please enter a positive number.';
    }
    if (
      data.cost_of_land == '' ||
      !isNumber(data.cost_of_land.replace('%', ''))
    ) {
      result = false;
      error['cost_of_land']['isError'] = true;
      error['cost_of_land']['message'] = 'Please enter a positve number.';
    }
    if (
      data.leasable_area_project == '' ||
      !isNumber(data.leasable_area_project.replace('%', ''))
    ) {
      result = false;
      error['leasable_area_project']['isError'] = true;
      error['leasable_area_project']['message'] =
        'Please enter a positve number.';
    }
    if (
      data.rate_to_lease_inv == '' ||
      !isNumber(data.rate_to_lease_inv.replace('%', ''))
    ) {
      result = false;
      error['rate_to_lease_inv']['isError'] = true;
      error['rate_to_lease_inv']['message'] = 'Please enter a positve number.';
    }
    if (
      data.quarterly_escalation == '' ||
      !isNumber(data.quarterly_escalation.replace('%', '')) ||
      Number(data.quarterly_escalation) > 5 ||
      Number(data.quarterly_escalation) < 0
    ) {
      result = false;
      error['quarterly_escalation']['isError'] = true;
      error['quarterly_escalation']['message'] = 'Enter a number between 0-5.';
    }
    if (
      data.CAM_margin_profit == '' ||
      !isNumber(data.CAM_margin_profit.replace('%', ''))
    ) {
      result = false;
      error['CAM_margin_profit']['isError'] = true;
      error['CAM_margin_profit']['message'] = 'Please enter a positve number.';
    }
    if (
      data.cons_cost_estimate == '' ||
      !isNumber(data.cons_cost_estimate.replace('%', ''))
    ) {
      result = false;
      error['cons_cost_estimate']['isError'] = true;
      error['cons_cost_estimate']['message'] = 'Please enter a positve number.';
    }
    if (
      data.quarterly_escalation_cons_cost == '' ||
      !isNumber(data.quarterly_escalation_cons_cost.replace('%', '')) ||
      Number(data.quarterly_escalation_cons_cost.replace('%', '')) > 5 ||
      Number(data.quarterly_escalation_cons_cost.replace('%', '')) < 0
    ) {
      result = false;
      error['quarterly_escalation_cons_cost']['isError'] = true;
      error['quarterly_escalation_cons_cost']['message'] =
        'Please enter a number between 0-5.';
    }
    if (data.brokerage == '' || !isNumber(data.brokerage.replace('%', ''))) {
      result = false;
      error['brokerage']['isError'] = true;
      error['brokerage']['message'] = 'Please enter a positive number.';
    }
    if (
      data.upfront_costs == '' ||
      !isNumber(data.upfront_costs.replace('%', ''))
    ) {
      result = false;
      error['upfront_costs']['isError'] = true;
      error['upfront_costs']['message'] = 'Please enter a positve number.';
    }
    if (
      data.other_costs == '' ||
      !isNumber(data.other_costs.replace('%', '')) ||
      Number(data.other_costs) == ''
    ) {
      result = false;
      error['other_costs']['isError'] = true;
      error['other_costs']['message'] = 'Please enter a positve number.';
    }
    if (
      data.operational_cost == '' ||
      !isNumber(data.operational_cost.replace('%', ''))
    ) {
      result = false;
      error['operational_cost']['isError'] = true;
      error['operational_cost']['message'] = 'Enter a positive number.';
    }
    if (
      data.quarters_to_launch_project == '' ||
      !isNumber(data.quarters_to_launch_project.replace('%', '')) ||
      Number(data.quarters_to_launch_project.replace('%', '')) > 40 ||
      Number(data.quarters_to_launch_project.replace('%', '')) < 1
    ) {
      result = false;
      error['quarters_to_launch_project']['isError'] = true;
      error['quarters_to_launch_project']['message'] = 'Enter a number between 1-40.';
    }
    if (
      data.quarters_to_complete_consturction == '' ||
      !isNumber(data.quarters_to_complete_consturction.replace('%', '')) ||
      Number(data.quarters_to_complete_consturction.replace('%', '')) < 1
    ) {
      result = false;
      error['quarters_to_complete_consturction']['isError'] = true;
      error['quarters_to_complete_consturction']['message'] = 'Enter a number greater than 1.';
    }
    if (
      data.leasable_area == '' ||
      !isNumber(data.leasable_area.replace('%', '')) ||
      Number(data.leasable_area.replace('%', '') > 100)
    ) {
      result = false;
      error['leasable_area']['isError'] = true;
      error['leasable_area']['message'] = 'Enter a number between 0-100.';
    }
    if (
      data.peak_lease == '' ||
      !isNumber(data.peak_lease.replace('%', '')) ||
      Number(data.peak_lease.replace('%', '')) > 100
    ) {
      result = false;
      error['peak_lease']['isError'] = true;
      error['peak_lease']['message'] = 'Enter a number between 0-100.';
    }
    if (
      data.post_peak_lease == '' ||
      !isNumber(data.post_peak_lease.replace('%', '')) ||
      Number(data.post_peak_lease) < 1
    ) {
      result = false;
      error['post_peak_lease']['isError'] = true;
      error['post_peak_lease']['message'] = 'Enter a number greater than 1.';
    }
    if (
      data.asset_exit_peak == '' ||
      !isNumber(data.asset_exit_peak.replace('%', '')) ||
      Number(data.asset_exit_peak.replace('%', '') < 1)
    ) {
      result = false;
      error['asset_exit_peak']['isError'] = true;
      error['asset_exit_peak']['message'] = 'Enter a number greater than 1.';
    }
    if (
      data.construction_finance_lim == '' ||
      !isNumber(data.construction_finance_lim.replace('%', '')) ||
      Number(data.construction_finance_lim.replace('%', '') > 100)
    ) {
      result = false;
      error['construction_finance_lim']['isError'] = true;
      error['construction_finance_lim']['message'] = 'Enter a number between 0-100.';
    }
    if (
      data.construction_finance_cost == '' ||
      !isNumber(data.construction_finance_cost.replace('%', '')) ||
      Number(data.construction_finance_cost.replace('%', '') > 100)
    ) {
      result = false;
      error['construction_finance_cost']['isError'] = true;
      error['construction_finance_cost']['message'] = 'Enter a number between 0-100.';
    }
    if (
      data.LRD_cost == '' ||
      !isNumber(data.LRD_cost.replace('%', '')) ||
      Number(data.LRD_cost.replace('%', '') > 100)
    ) {
      result = false;
      error['LRD_cost']['isError'] = true;
      error['LRD_cost']['message'] = 'Enter a number between 0-100.';
    }
    if (
      data.LRD_principal_amortisation == '' ||
      !isNumber(data.LRD_principal_amortisation.replace('%', ''))
    ) {
      result = false;
      error['LRD_principal_amortisation']['isError'] = true;
      error['LRD_principal_amortisation']['message'] = 'Enter a positive number.';
    }
    if (
      data.exit_cap_rate == '' ||
      !isNumber(data.exit_cap_rate.replace('%', '') || Number(data.exit_cap_rate) >100)
    ) {
      result = false;
      error['exit_cap_rate']['isError'] = true;
      error['exit_cap_rate']['message'] = 'Enter a number between 0-100.';
    }

    setError({ ...error });
    setSaving(result);
    if (result) {
      //console.log(data);
      axios({
        url: `https://script.google.com/macros/s/AKfycbwsoWPwotuI55Y31vXbQ9t5uk7EIDMqUdsClEpY4-Tw08VACAXoBSdXEwadSzEH2MZfUw/exec`,
        data,
        headers: { 'Content-Type': 'text/plain' },
        method: 'post',
      })
        .then((res) => {
          setSaving(false);
          //console.log('Raw result', res);
          //console.log('Result DATA', res.data);
          setTableData(res.data);
        })
        .catch((e) => {
          setSaving(false);
          console.log(e);
        });
    }
  };
  return (
    <>
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h3>Choose your option</h3>
          </div>
          <div>
            <div
              className='cont'
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <div>
                <h5>We&apos;ll analyse it from your point of view! - 1</h5>
              </div>
              <div>
                <FormControl component='fieldset'>
                  <RadioGroup
                    aria-label='gender'
                    name='pov1-radio-groups'
                    value={data.pov1}
                    onChange={onPov1Change}
                  >
                    <FormControlLabel
                      value='I want to see returns (IRR) at a particular price and business plan'
                      control={
                        <Radio
                          classes={{
                            checked: classes.radio,
                          }}
                        />
                      }
                      label='I want to see returns (IRR) at a particular price and business plan'
                    />
                    <FormControlLabel
                      value='I want to value the asset (NPV) basis a business plan and discount rate or desired return'
                      control={
                        <Radio
                          classes={{
                            checked: classes.radio,
                          }}
                        />
                      }
                      label='I want to value the asset (NPV) basis a business plan and discount rate or desired return'
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          <br />
          <div>
            <div
              className='cont'
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <div>
                <h5>We&apos;ll analyse it from your point of view! - 2</h5>
              </div>
              <div>
                <FormControl component='fieldset'>
                  <RadioGroup
                    aria-label='gender'
                    name='pov2-radio-groups'
                    value={data.pov2}
                    onChange={handlePov2Change}
                  >
                    {pov2.map((item, index) => (
                      <FormControlLabel
                        key={index}
                        value={item}
                        checked={data.pov2 == item}
                        control={
                          <Radio
                            classes={{
                              checked: classes.radio,
                            }}
                          />
                        }
                        label={item}
                      ></FormControlLabel>
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          <br />
          <div>
            <div
              className='cont'
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <div>
                <h5>
                  Would you like to evaluate your project in INR mn or INR
                  crore?
                </h5>
              </div>
              <div>
                <FormControl component='fieldset'>
                  <RadioGroup
                    aria-label='gender'
                    name='currency-radio-groups'
                    value={data.eval_mn_crore}
                    onChange={handleCurrency}
                  >
                    <FormControlLabel
                      value='INR crore'
                      control={
                        <Radio
                          classes={{
                            checked: classes.radio,
                          }}
                        />
                      }
                      label='INR crore'
                    />
                    <FormControlLabel
                      value='INR mn'
                      control={
                        <Radio
                          classes={{
                            checked: classes.radio,
                          }}
                        />
                      }
                      label='INR mn'
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className='title'>
            <h3>Land and Area</h3>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>How big is the land parcel?</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='land_parcel'
                labelText='Acres'
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
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>
                Whats the cost of your land (we&apos;re assuming upfront
                payment!)
              </h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='cost_of_land'
                labelText={data.eval_mn_crore + ' per acre'}
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
          {data.pov2 ==
            'I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer' ||
          data.pov2 ==
            'I am buying the land as a financial investor and will do a Revenue Share JDA with a developer' ? (
            <div
              className='cont'
              style={{
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                display: 'flex',
              }}
            >
              <div>
                <h5>LO Share</h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomInput
                  id='float'
                  parentCallback={onCustomInputChange}
                  name='LO_share'
                  labelText='% of revenue'
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
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>How much leasable area in the project?</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='leasable_area_project'
                labelText='square feet'
                formControlProps={{
                  fullWidth: true,
                  error: error['leasable_area_project']['isError'],
                }}
              />
              {error['leasable_area_project']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['leasable_area_project']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className='title'>
            <h3>Revenue</h3>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>At what rate will you lease the inventory</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='rate_to_lease_inv'
                labelText='INR / sft / month'
                formControlProps={{
                  fullWidth: true,
                  error: error['rate_to_lease_inv']['isError'],
                }}
              />
              {error['rate_to_lease_inv']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['rate_to_lease_inv']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>Would you like to assume any quarterly escalation?</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='quarterly_escalation'
                labelText='%'
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
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>
                If you want to add some CAM margin profit (calculated on leased
                area)
              </h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='CAM_margin_profit'
                labelText='INR / sft / month'
                formControlProps={{
                  fullWidth: true,
                  error: error['CAM_margin_profit']['isError'],
                }}
              />
              {error['CAM_margin_profit']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['CAM_margin_profit']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className='title'>
            <h3>Costs</h3>
          </div>
          <br />
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h5>
                Would you like to calculate construction cost on saleable area
                or add a separate construction area / built up area
              </h5>
            </div>
            <div>
              <FormControl component='fieldset'>
                <RadioGroup
                  aria-label='gender'
                  name='saleable-area-or-built-up'
                  value={data.saleable_area_or_built_up}
                  onChange={saleBuiltChange}
                >
                  <FormControlLabel
                    value='Saleable Area'
                    control={
                      <Radio
                        classes={{
                          checked: classes.radio,
                        }}
                      />
                    }
                    label='Saleable Area'
                  />
                  <FormControlLabel
                    value='Built Up Area'
                    control={
                      <Radio
                        classes={{
                          checked: classes.radio,
                        }}
                      />
                    }
                    label='Built Up Area'
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          {data.saleable_area_or_built_up == 'Built Up Area' ? (
            <div
              className='cont'
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <div>
                <h5>How much built up area in the project?</h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomInput
                  id='float'
                  parentCallback={onCustomInputChange}
                  name='builtup_area_project'
                  labelText=''
                  formControlProps={{
                    fullWidth: true,
                    error: error['builtup_area_project'],
                  }}
                />
                {error['builtup_area_project']['isError'] ? (
                  <p style={{ color: 'red' }}>
                    {error['builtup_area_project']['message']}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>What&apos;s your cons cost estimate?</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='cons_cost_estimate'
                labelText=''
                formControlProps={{
                  fullWidth: true,
                  error: error['cons_cost_estimate']['isError'],
                }}
              />
              {error['cons_cost_estimate']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['cons_cost_estimate']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>
                Would you like to assume any quarterly escalation in cons cost?
              </h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='quarterly_escalation_cons_cost'
                labelText='%'
                formControlProps={{
                  fullWidth: true,
                  error: error['quarterly_escalation_cons_cost']['isError'],
                }}
              />
              {error['quarterly_escalation_cons_cost']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['quarterly_escalation_cons_cost']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>How many months brokerage upon lease</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='brokerage'
                labelText=''
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
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>
                Load up any upfront costs u may incur! (example - approval
                costs)
              </h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='upfront_costs'
                labelText={data.eval_mn_crore}
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
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>
                Load up any other costs u want to! (spread equally over duration
                of cons)
              </h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='other_costs'
                labelText={data.eval_mn_crore}
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
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>
                Load up any other operational costs u want to! (post completion
                on total area)
              </h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='operational_cost'
                labelText='INR / sft / month'
                formControlProps={{
                  fullWidth: true,
                  error: error['operational_cost']['isError'],
                }}
              />
              {error['operational_cost']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['operational_cost']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className='title'>
            <h3>Timelines and Leasing</h3>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>
                After how many quarters of buying land will project be launched?
              </h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='quarters_to_launch_project'
                labelText=''
                formControlProps={{
                  fullWidth: true,
                  error: error['quarters_to_launch_project']['isError'],
                }}
              />
              {error['quarters_to_launch_project']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['quarters_to_launch_project']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>In how many quarters will construction be completed?</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='quarters_to_complete_consturction'
                labelText=''
                formControlProps={{
                  fullWidth: true,
                  error: error['quarters_to_complete_consturction']['isError'],
                }}
              />
              {error['quarters_to_complete_consturction']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['quarters_to_complete_consturction']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>What % of leasable area would be preleased at completion</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='leasable_area'
                labelText='%'
                formControlProps={{
                  fullWidth: true,
                  error: error['leasable_area']['isError'],
                }}
              />
              {error['leasable_area']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['leasable_area']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>Peak lease (at which you will exit asset)</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='peak_lease'
                labelText='%'
                formControlProps={{
                  fullWidth: true,
                  error: error['peak_lease']['isError'],
                }}
              />
              {error['peak_lease']['isError'] ? (
                <p style={{ color: 'red' }}>{error['peak_lease']['message']}</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>
                In how many quarters post completion will peak lease be achieved
              </h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='post_peak_lease'
                labelText=''
                formControlProps={{
                  fullWidth: true,
                  error: error['post_peak_lease']['isError'],
                }}
              />
              {error['post_peak_lease']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['post_peak_lease']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>
                After how many quarters of peak lease will asset exit at peak
              </h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='asset_exit_peak'
                labelText=''
                formControlProps={{
                  fullWidth: true,
                  error: error['asset_exit_peak']['isError'],
                }}
              />
              {error['asset_exit_peak']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['asset_exit_peak']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className='title'>
            <h3>Debt</h3>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>Construction Finance Limit (Only Int Payout till LRD)</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='construction_finance_lim'
                labelText='% of Construction Cost'
                formControlProps={{
                  fullWidth: true,
                  error: error['construction_finance_lim']['isError'],
                }}
              />
              {error['construction_finance_lim']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['construction_finance_lim']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>Construction Finance Cost</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='construction_finance_cost'
                labelText='%'
                formControlProps={{
                  fullWidth: true,
                  error: error['construction_finance_cost']['isError'],
                }}
              />
              {error['construction_finance_cost']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['construction_finance_cost']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>LRD Cost</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='LRD_cost'
                labelText='%'
                formControlProps={{
                  fullWidth: true,
                  error: error['LRD_cost']['isError'],
                }}
              />
              {error['LRD_cost']['isError'] ? (
                <p style={{ color: 'red' }}>{error['LRD_cost']['message']}</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>LRD Principal Amortisation</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='LRD_principal_amortisation'
                labelText='Years'
                formControlProps={{
                  fullWidth: true,
                  error: error['LRD_principal_amortisation']['isError'],
                }}
              />
              {error['LRD_principal_amortisation']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['LRD_principal_amortisation']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className='title'>
            <h3>Others</h3>
          </div>

          {data.pov1 ==
          'I want to value the asset (NPV) basis a business plan and discount rate or desired return' ? (
            <div
              className='cont'
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <div>
                <h5>Desired return or Discount rate</h5>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CustomInput
                  id='float'
                  parentCallback={onCustomInputChange}
                  name='desired_return'
                  labelText='%'
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
            </div>
          ) : (
            <></>
          )}
          <div
            className='cont'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <div>
              <h5>Exit Cap Rate</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CustomInput
                id='float'
                parentCallback={onCustomInputChange}
                name='exit_cap_rate'
                labelText='%'
                formControlProps={{
                  fullWidth: true,
                  error: error['exit_cap_rate']['isError'],
                }}
              />
              {error['exit_cap_rate']['isError'] ? (
                <p style={{ color: 'red' }}>
                  {error['exit_cap_rate']['message']}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              marginTop: '1rem',
            }}
          >
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
        </div>
        <div className={classes.container}>
          <div>
            <BuildLeaseTable data={tableData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BuildLease;

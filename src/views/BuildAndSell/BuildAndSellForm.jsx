import React from 'react';
import Header from 'components/Header/Header.js';
import Button from 'components/CustomButtons/Button.js';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import CustomInput from 'components/CustomInput/CustomInput.js';

//Dropdown
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
// import Badge from 'components/Badge/Badge.js';

const BuildAndSell = () => {
  // const [dispForm1, setForm1] = React.useState(true);
  return (
    <div>
      <Header />
      <h3> Build and sell Form</h3>
      {/* {
          dispForm1 ? <form1> : <Form2>
      } */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='Your email address'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='Tell us about yourself!'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </GridContainer>
      <div>
        <CustomDropdown
          buttonText="We'll analyse it from your point of view! - 1"
          
          dropdownList={[
            { divider: true },
            'I want to see returns (IRR) at a particular price and business plan',
            { divider: true },
            'I want to value the asset (NPV) basis a business plan and discount rate or desired return',
          ]}
        />
      </div>
      <div>
        <CustomDropdown
          buttonText="We'll analyse it from your point of view! - 2"
          dropdownList={[
            { divider: true },
            'I am buying the land and developing the project myself',
            { divider: true },
            'I am buying the land as a financial investor and will do a Revenue Share JDA with a developer',
            { divider: true },
            'I want to value the asset basis the total project free cashflows',
            { divider: true },
            'I want to value the asset basis land owners share of cashflows in a Revenue Share JDA with a developer',
          ]}
        />
      </div>
      <div>
        <CustomDropdown
          buttonText='Is it residential or commercial or residential with commercial component?'
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
        <CustomDropdown
          buttonText='Would you like to evaluate your project in INR mn or INR crore?'
          dropdownList={[
            { divider: true },
            'INR mn',
            { divider: true },
            'INR Crore',
          ]}
        />
      </div>
      <div>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='how big is the land parcel?'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="whats the cost of your land (we're assuming upfront payment!)"
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </div>
      <div>
        <h6>Residential:</h6>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='how much saleable area in the project?:'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='Whats your all inclusive sales price?'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='Would you like to assume any quarterly escalation?
            '
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </div>
      <div>
        <h6>Commercial:</h6>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='how much saleable area in the project?'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='whats your all inclusive sales price?'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='would you like to assume any quarterly escalation?'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </div>
      <div>
        <h6>Cost:</h6>
        <CustomDropdown
          buttonText='Would you like to calculate construction cost on saleable area or add a separate construction area / built up area'
          dropdownList={[
            { divider: true },
            'Built Up Area',
            { divider: true },
            'Saleable Area',
          ]}
        />
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='how much built up area in the project?'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="what's your cons cost estimate?"
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='would you like to assume any quarterly escalation in cons cost?'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='what % brokerage will u pay?'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='load up any upfront costs u may incur! (example - approval costs)'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='load up any other costs u want to!'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='load up any other costs u want to! (spread over duration of cons)'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </div>
      <div>
        <h6>Timelines</h6>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='after how many quarters of buying land will project be launched?'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='in how many quarters will construction be completed?'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='in how many quarters will you sell 100% of the residential inventory?'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='in how many quarters will you sell 100% of the commercial inventory?'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </div>
      <div>
        <h6> Others: </h6>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText='Desired return or discount rate?'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </div>

      <Button type='button'>Submit</Button>
    </div>
  );
};

export default BuildAndSell;

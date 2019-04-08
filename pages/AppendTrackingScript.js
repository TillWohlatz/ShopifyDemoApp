import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    Stack,
    TextField,
    SettingToggle,
    TextStyle,
  } from '@shopify/polaris';
import Cookies from 'js-cookie';

const {  SHOPIFY_API_KEY } = process.env;

const Shopify = require('shopify-api');
 
// const shopify = new Shopify({
//   shopName:  Cookies.get('shopOrigin'),
//   apiKey: SHOPIFY_API_KEY,
 
// });
// example under https://www.npmjs.com/package/shopify-api

  
  class AppendTrackingScript extends React.Component{
    state = {
        advertiserId:-1,
        scriptAppended: false,
      };
    render() {
        const { advertiserId, scriptAppended } = this.state;
       
        return (
        <Page>
          <Layout>
            <Layout.AnnotatedSection
              title="Append script tag"
              description="Append master tag script to your shop application"
            >
              <Card sectioned>
                <Form onSubmit={this.appendMastertag}>
                
                  <FormLayout>
                    <TextField
                      value={advertiserId}
                      onChange={this.advertiserIdChange('advertiserId')}
                      label="Advertiser id"
                      type="advertiserId"
                    />
                    <Stack distribution="trailing">
                      <Button primary submit onClick={this.toggleAppendMastertag}>
                        Append master tag
                      </Button>
                    </Stack>
                  </FormLayout>
                </Form>
              </Card>
            </Layout.AnnotatedSection>
           
          </Layout>
        </Page>
      );
    }
    appendMastertag = () => {
        
        console.log('submission', this.state);
        console.log('Api access', this.shopify);
    
    };

    advertiserIdChange = field => {
        return value => this.setState({ [field]: value });
    };

    toggleAppendMastertag = () => {
      this.setState(({ scriptAppended }) => {
        return { scriptAppended: !scriptAppended };
    });
    };
  };
export default AppendTrackingScript;

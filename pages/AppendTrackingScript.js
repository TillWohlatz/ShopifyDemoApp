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

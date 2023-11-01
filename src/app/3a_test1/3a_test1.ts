import estimatedProxySizeJson from '../../assets/c3a_estimated_proxy_size.json'
import actualAddedSizeJson from '../../assets/c3a_actual_added_size.json'

export function data_test1() {
    var data_test1 = {
        proxy_size: estimatedProxySizeJson,
        actual_added: actualAddedSizeJson
    };
    return data_test1;
}
import estimatedProxySizeJson from '../../assets/c3a_estimated_proxy_size.json'
import actualDevelopHoursJson from '../../assets/c3a_actual_develop_hours.json'

export function data_test2() {
    var data_test2 = {
        proxy_size: estimatedProxySizeJson,
        actual_develop: actualDevelopHoursJson
    };
    return data_test2;
}
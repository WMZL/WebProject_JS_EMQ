// topicArr是一个字符串topic的数组集合，可以是单个字符串
client.unsubscribe('TestRecv', err => {
	if (err) {
		console.log('MQTT重置失败')
	} else {
		console.log('MQTT重置成功')
		client.subscribe('TestRecv', err => {
			if (err) {
				console.log('MQTT订阅失败')
			} else {
				console.log('MQTT订阅成功')
			}
		})
	}
})
// 监听处理
client.listen('rev', (topic, message, packet) => {
	// 数据转换
	console.log('接收到的数据123123', message.toString())
	// testmth('9709612969774b25b510875aab76287a')
	testmth(message.toString())
	// let oMessage = JSON.parse(message.toString())
	// 实时数据
	// console.log('接收到的数据', oMessage)
})
// 发送emq

function TestSend(str) {
	console.log(1 + str)
	client.publish('TestSend', str, {
		qos: 0,
		retain: false
	})
}

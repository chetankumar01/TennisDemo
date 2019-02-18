/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Appbar, List, Button, Divider } from 'react-native-paper';

export default class PlayerFilter extends Component {
  state = {
    filter: this.props.navigation.state.params.filter,
  };

  _goBack = () => this.props.navigation.goBack();

  _renderListIcon = isChecked => (
    <List.Icon icon={isChecked ? 'check-box' : 'check-box-outline-blank'} />
  );

  _applyFilter = () => {
    this.props.navigation.state.params.applyFilter(this.state.filter);
    this._goBack();
  };

  render() {
    const { filter } = this.state;
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Filter" />
          <Appbar.Action icon="close" onPress={this._goBack} />
        </Appbar.Header>
        <ScrollView style={styles.container}>
          <List.Section title="Gender">
            <List.Item
              title="Male"
              onPress={() =>
                this.setState({ filter: { ...filter, gender: 'Male' } })
              }
              left={() => this._renderListIcon(filter.gender === 'Male')}
            />
            <List.Item
              title="Female"
              onPress={() =>
                this.setState({ filter: { ...filter, gender: 'Female' } })
              }
              left={() => this._renderListIcon(filter.gender === 'Female')}
            />
            <List.Item
              title="Any"
              onPress={() =>
                this.setState({ filter: { ...filter, gender: null } })
              }
              left={() => this._renderListIcon(filter.gender === null)}
            />
          </List.Section>
          <Divider />
          <List.Section title="Skill Level">
            <List.Item
              title="Beginner"
              onPress={() =>
                this.setState({ filter: { ...filter, skill: 'Beginner' } })
              }
              left={() => this._renderListIcon(filter.skill === 'Beginner')}
            />
            <List.Item
              title="Intermediate"
              onPress={() =>
                this.setState({ filter: { ...filter, skill: 'Intermediate' } })
              }
              left={() => this._renderListIcon(filter.skill === 'Intermediate')}
            />
            <List.Item
              title="Advanced"
              onPress={() =>
                this.setState({ filter: { ...filter, skill: 'Advanced' } })
              }
              left={() => this._renderListIcon(filter.skill === 'Advanced')}
            />
            <List.Item
              title="Any"
              onPress={() =>
                this.setState({ filter: { ...filter, skill: null } })
              }
              left={() => this._renderListIcon(filter.skill === null)}
            />
          </List.Section>
          <Button
            style={{ marginHorizontal: 20 }}
            mode="contained"
            onPress={this._applyFilter}
          >
            Done
          </Button>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
